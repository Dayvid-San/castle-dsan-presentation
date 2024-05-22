import Link from 'next/link';
import Style from './style.module.scss';
import Button from '../ui/button';

interface Items {
    label: string,
    name: string,
    hrefLink: string,
    targetLink: string,
}

const Navbars = () => {
    const items: Items[] = [
        {
            label: 'Pomodoro',
            name: '',
            hrefLink: 'https://pomofocus.io/',
            targetLink: '_blank'
        },
        {
            label: 'Khan Academy',
            name: '',
            hrefLink: 'https://pt.khanacademy.org',
            targetLink: '_blank'
        },
        {
            label: 'Classroom',
            name: '',
            hrefLink: 'http://classroom.google.com/',
            targetLink: '_blank'
        },
        {
            label: 'SIGAA',
            name: '',
            hrefLink: 'https://www.sigaa.ufs.br',
            targetLink: '_blank'
        },
        {
            label: 'Trello',
            name: '',
            hrefLink: 'https://trello.com',
            targetLink: '_blank'
        },
        {
            label: 'Github',
            name: '',
            hrefLink: 'https://github.com/kamatashi',
            targetLink: '_blank'
        },
        {
            label: 'To do List',
            name: '',
            hrefLink: 'https://todoist.com/app/today',
            targetLink: '_blank'
        },
    ];

    return (
        <div className={Style.container}>
            <nav>
                {items.map((item: { label: string, hrefLink: string, targetLink: string}, index: number) => (
                    <Link href={item.hrefLink} target={item.targetLink}>
                        <Button key={index} label={item.label} />
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Navbars;