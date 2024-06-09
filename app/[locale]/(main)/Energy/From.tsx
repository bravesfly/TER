import { z } from "zod";
import { tronWeb } from "@/app/api/tronWeb";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { useWallet } from "@tronweb3/tronwallet-adapter-react-hooks";
import { useEffect, useState } from "react";

const energySchema = z.object({
  wallet: z.string().length(34),
  duration: z.enum(['1', '3', '24', '72']),
  energy: z.enum(['32000', '65000']),
  amount: z.number(),
  type: z.enum(['manual', 'wallet']).default('manual'),
});

export default function EnergyForm() {
  const { toast } = useToast()
  const recive_wallet = process.env.NEXT_PUBLIC_WALLET_ADDRESS
  
  const t = useTranslations('energy');
  const form = useForm<z.infer<typeof energySchema>>({
    resolver: zodResolver(energySchema),
    defaultValues: {
      type: "manual",
      duration: '1',
      energy: '32000',
      amount: 0,
      wallet: '',
    },
  });

  const { control, handleSubmit, setValue, watch } = form;
  const [amount, setAmount] = useState(0);
  const { address, connected, signTransaction } = useWallet();
  const duration = watch('duration');
  const energy = watch('energy');
  
  useEffect(() => {
    if (connected && address) {
      form.setValue('wallet', address);
      // onWallet(address,connected)
    } else if (!connected) {
      // onWallet('',connected)
      form.setValue('wallet', '');
    }
  }, [connected, address]);

  useEffect(() => {
    const calculateAmount = (duration: string, energy: string) => {
      const energyValue = parseInt(energy, 10);
      let amount = 0;

      switch (energy) {
        case '32000':
          amount = 1;
          break;
        case '65000':
          amount = 2;
          break;
        default:
          amount = 0;
      }
      return amount;
    };

    const newAmount = calculateAmount(duration, energy);
    setValue('amount', newAmount);
    setAmount(newAmount);
  }, [duration, energy, setValue]);

  async function onSubmit(values: z.infer<typeof energySchema>) {
    if (connected) {
      try {
        const transaction = await tronWeb.transactionBuilder.sendTrx(
          process.env.NEXT_PUBLIC_WALLET_ADDRESS,
          tronWeb.toSun(values.amount),
          address
        );
        const signedTransaction = await signTransaction(transaction);
        const res = await tronWeb.trx.sendRawTransaction(signedTransaction);
        console.log(res);
      } catch (error) {
        console.error("Transaction error:", error);
      }
    } else {
      console.log('使用手动连接');
    }
    // Call the parent component's function with form values
  }

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(recive_wallet as string);
      toast({
        description: t('copySuccess'),
      })
    } catch (err) {
      toast({
        variant: "destructive",
        description: t('copyFaild'),
      })
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={control}
          name="wallet"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('walletAddress')}</FormLabel>
              <FormControl>
                <Input placeholder={t('walletAddressPlaceholder') } {...field} />
              </FormControl>
              <FormDescription>
              {t('useAddressRecEnergy') }
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="energy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('energyQuantity')}</FormLabel>
              <FormControl>
                <Input placeholder={t('walletAddressPlaceholder') } {...field} />
              </FormControl>
              <FormMessage />
              <div className="flex justify-center">
                <Button type="button" className='w-1/2' onClick={() => setValue('energy', '32000')}>+32000</Button>
                <div className="w-2"></div>
                <Button type="button" className='w-1/2' onClick={() => setValue('energy', '65000')}>+65000</Button>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('Rental duration')}</FormLabel>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder={t('rentDurationPlaceholder')} />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value='1'>{t('1H')}</SelectItem>
                    <SelectItem value="3" disabled>{t('3H')}</SelectItem>
                    <SelectItem value="24" disabled>{t('1D')}</SelectItem>
                    <SelectItem value="72" disabled>{t('3D')}</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>

          <Label>{t('needPay')}: {form.getValues('amount')} TRX</Label>
        </div>
        {connected ? <Button type="submit" className="w-full">{t('transfer')}</Button> : <Dialog >
          <DialogTrigger asChild>
            <Button className="w-full">{t('pay')}</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] h-auto">
            <DialogHeader>
              <DialogTitle>{t('amount')}:{form.getValues('amount')} TRX</DialogTitle>
              <DialogDescription>
                {t('acanQRcode')}<br></br>{t('dontOverPay')}<br></br>{t('oneRelease')}
              </DialogDescription>
            </DialogHeader>
            <div >
              <Image
                src='/qrcode.png'
                alt="wallet address image"
                width={200}
                height={200}
                className="mx-auto"
              />
              <div className="flex items-center justify-center my-2">
                <Separator className="mx-2 w-1/2" />
                <p className="text-sm">OR</p>
                <Separator className="mx-2 w-1/2" />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <div className="mb-2 w-full">
                  <Input className="w-full h-8" value={recive_wallet} readOnly>
                  </Input>
                </div>
                <div>
                  <AnimatedSubscribeButton
                    buttonOnClick={() => {
                      handleCopyText()
                    }}
                    brand="#687af0"
                    subscribeStatus={false}
                    buttonTextColor="#000009"
                    initialText={
                      <span className="group inline-flex items-center">
                        {t('copyToClipboard')}{" "}
                        <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    }
                    changeText={
                      <span className="group inline-flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4" />
                        {t('copySuccess')}{" "}
                      </span>
                    }
                  />
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>}


      </form>
    </Form>
  );
}
