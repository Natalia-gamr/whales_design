


const useWhalesService = () => {

    const arr = {
        "brifs": [
            {name: 'Веб дизайн', info: 'Бриф на разработку веб дизайнa', id: 1, descr: 'web_design'},
            {name: 'Айдентика', info: 'Бриф на разработку айдентики', id: 2, descr: 'identity'},
            {name: 'Презентация', info: 'Бриф на разработку презентации',id: 3, descr: 'presentation'},
            {name: 'Логотип', info: 'Бриф на разработку логотипа', id: 4, descr: 'logo'},
            {name: 'Иллюстрация', info: 'Бриф на разработку иллюстрации', id: 5, descr: 'illustration'}
        ],
        "services": [
            {
                name: 'Айдентика',
                title: 'Айдентики',
                descr: 'Мы занимаемся дизайном логотипов, элементов фирменного стиля', 
                id: 1, 
                link: 'identity', 
                pageDescr : 'Создайте незабываемое первое впечатление, с помощью потрясающего визуального стиля вашего бренда!',
                buttonLink: 'identity',
                className: 'identity'
            },
            {
                name: 'Иллюстрации', 
                title: 'Креатива', 
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', 
                id: 2, 
                link: 'creativ', 
                pageDescr : 'Разрабатываем креативы для соц. сетей, контекстной рекламы, а также для мобильных игр и приложений!',
                buttonLink: 'illustration',
                className: 'illustration'
            },
            {
                name: 'Логотипы', 
                title: 'Логотипа', 
                descr: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                id: 3, 
                link: 'logo', 
                pageDescr : 'Вы хорошо знаете свой бизнес, а мы знаем как сделать хороший дизайн! И будем рады сделать лого для вашей: Компании, Приложения или Сайта.',
                buttonLink: 'logo',
                className: 'logo'
            },
            {
                name: 'Веб сайты', 
                title: 'Веб сайтов', 
                descr: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa deserunt', 
                id: 4, 
                link: 'websites', 
                pageDescr : '«Если вашего бизнеса нет в интернете, значит, вас нет в бизнесе»  Билл Гейтс',
                buttonLink: 'web_design',
                className: 'websites'
            },
            {
                name: 'Креативы', 
                title: 'Креатива', 
                descr: 'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation', 
                id: 5, 
                link: 'creativ',
                pageDescr : 'Разрабатываем креативы для соц. сетей, контекстной рекламы, а также для мобильных игр и приложений!', 
                buttonLink: 'illustration',
                className: 'creativ'
            },
            {
                name: 'Презентации', 
                title: 'Презентаций', 
                descr: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum', 
                id: 6, 
                link: 'presentation', 
                pageDescr : 'Мы сделаем уникальный дизайн для вашей корпоративной презентации или питч-дека!',
                buttonLink: 'presentation',
                className: 'presentation'
            }
        ],
        "project": [
            {name: '', id: 1, descr: '', title: '', img: ''},
            {name: '', id: 2, descr: '', title: '', img: ''},
            {name: '', id: 3, descr: '', title: '', img: ''},
            {name: '', id: 4, descr: '', title: '', img: ''},
            {name: '', id: 5, descr: '', title: '', img: ''},
        ]
            
        
        
    }

    return {arr}

}



export default useWhalesService