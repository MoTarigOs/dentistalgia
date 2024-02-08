import '@styles/MainLayout.css';
import DataContext from '@utils/Context';
import Header from '@sections/Header';
import Footer from '@sections/Footer';

export const metadata = {
    title: 'Dentistalgia',
    description: 'Home page'
};

const layout = ({ children }) => {

  return (
    
    <html>

        <head>

            <meta name="keywords" content="Dentist" />

            <meta property="og:title" content="DENTISTALGIA" />

            <meta property="og:description" content="Dentist services provider" />

            <meta property="og:image" content="https://f003.backblazeb2.com/file/personal-use-mot-tarig/og_logo.png"/>

            <link rel="icon" sizes='256x256' href="/myicon.png" />
        
        </head>

        <body className='colors'>

            <DataContext>

                <div className='main'>

                    <Header />

                    <main className='app'>
                        {children}
                    </main>

                    <Footer />

                </div>

            </DataContext>

        </body>

    </html>

  )
}

export default layout;
