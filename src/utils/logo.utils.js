const getLogoUrl = (url) => {
    switch(url) {
        case './assets/logos/blogr.svg': return require('../assets/logos/blogr.svg').default;
        case './assets/logos/coffeeroasters.svg': return require('../assets/logos/coffeeroasters.svg').default;
        case './assets/logos/creative.svg': return require('../assets/logos/creative.svg').default;
        case './assets/logos/crowdfund.svg': return require('../assets/logos/crowdfund.svg').default;
        case './assets/logos/maker.svg': return require('../assets/logos/maker.svg').default;
        case './assets/logos/mastercraft.svg': return require('../assets/logos/mastercraft.svg').default;
        case './assets/logos/officelite.svg': return require('../assets/logos/officelite.svg').default;
        case './assets/logos/pod.svg': return require('../assets/logos/pod.svg').default;
        case './assets/logos/pomodoro.svg': return require('../assets/logos/pomodoro.svg').default;
        case './assets/logos/scoot.svg': return require('../assets/logos/scoot.svg').default;
        case './assets/logos/typemaster.svg': return require('../assets/logos/typemaster.svg').default;
        case './assets/logos/vector.svg': return require('../assets/logos/vector.svg').default;
    }
};

export default getLogoUrl;