import navJson from '../../pages/nav/navList.js'
export default {
    state: {
        currentNav: [0]
    },
    getters: {},
    mutations: {
        setNav(state, id) {
            state.currentNav = id;
        }
    },
    actions: {
        setNav(context, id) {
            context.commit('setNav', id)
        },
        setNavByID(context, id) {
            let array = [];
            getNavArray(id);
            function getNavArray(id) {
                navJson.forEach(nav => {
                    if (nav.id === id) {
                        array.unshift(nav.id);
                        if (nav.parent || nav.parent === 0) {
                            getNavArray(nav.parent);
                        }
                    }
                });
            }
            context.commit('setNav', array)
        },
        setNavByRouter(context, router) {
            let array = [];
            navJson.forEach(nav => {
                if (nav.url === router) {
                    getNavArray(nav.id)
                }
            });
            function getNavArray(id) {
                navJson.forEach(nav => {
                    if (nav.id === id) {
                        array.unshift(nav.id);
                        if (nav.parent || nav.parent === 0) {
                            getNavArray(nav.parent);
                        }
                    }
                });
            }
            context.commit('setNav', array)
        },
    }
};
