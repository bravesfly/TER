
import Header from './Header'
import Footer from './Footer'
import { Toaster } from "@/components/ui/toaster"
import '@tronweb3/tronwallet-adapter-react-ui/style.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';
type Props = {
  children: React.ReactNode;
  params: { locale: string };
};
export default function HomeLayout({ children, params: { locale } }: Props) {
  
  const messages = useMessages();
  return (
    <>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Header></Header>
        {children}
        <Toaster />
        <Footer></Footer>
      </NextIntlClientProvider>

    </>
  )
}
