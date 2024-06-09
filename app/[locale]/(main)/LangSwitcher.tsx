
import { useLocale } from "next-intl";
import { Languages } from 'lucide-react';
import { localeItems, useRouter, usePathname } from '@/novigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  console.log(locale)

  const handleChange = (e: any) => {
    router.push(pathname, { locale: e.code });
  };
  return (

    <div>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
        <Languages></Languages>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {localeItems.map((item) =>{
          return (
            <DropdownMenuItem key={item.code} onClick={() => handleChange(item)} className="cursor-pointer">{item.name}</DropdownMenuItem>)
        })}
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  );
}