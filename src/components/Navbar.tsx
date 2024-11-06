import ThemeSwitcher from '@/components/ThemeSwitcher';
import socials from '@/data/socials';
import {Button, Link, Navbar, NavbarContent, NavbarItem} from '@nextui-org/react';

const links = [
    {label: 'Skills', url: '#skills'},
    {label: 'Projects', url: '#projects'},
];

export default () => {
    return (
        <Navbar
            position="sticky"
            classNames={{
                base: '!backdrop-blur-[1px] bg-opacity-80 rounded-xl border-2 border-black shadow-xl box-border mx-auto w-3/4',
                content: 'basis-1/5 sm:basis-full gap-3',
                brand: 'gap-3 max-w-fit',
            }}
        >
            <NavbarContent as="div" justify="start">
                {links.map((link, index) => (
                    <NavbarItem key={`${link.label}-${index}`}>
                        <Link color="foreground" href={link.url}>
                            {link.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent as="div" justify="end">
                {socials.map((social, index) => (
                    <NavbarItem key={`${social.label}-${index}`}>
                        <Button
                            as={Link}
                            aria-label={social.label}
                            isIconOnly={true}
                            variant={"light"}
                            href={social.url}
                        >
                            <social.icon size="16"/>
                        </Button>
                    </NavbarItem>
                ))}
                <NavbarItem>
                    <ThemeSwitcher/>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};