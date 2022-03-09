const theme = {
    light: {
        background: {
            primary: "#f8f8f8",
            secondary: "#f9fafe",
            tertiary: "#f9fafe",
        },
        button: {
            edit: {
                background: { default: "#f9fafe", hover: "#dfe3fa" },
                text: "#7e88c3",
            },
            saveDraft: {
                background: { default: "#373b53", hover: "#0c0e16" },
                text: "#888eb0",
            },
        },
        nav: "#373b53",
        text: { primary: "#0c0e16", secondary: "#7e88c3" },
    },
    dark: {
        background: {
            primary: "#141625",
            secondary: "#1e2139",
            tertiary: "#252945",
        },
        button: {
            edit: {
                background: { default: "#252945", hover: "#fff" },
                text: "#dfe3fa",
            },
            saveDraft: {
                background: { default: "#373b53", hover: "#1e2139" },
                text: "#dfe3fa",
            },
        },
        nav: "#1e2139",
        text: { primary: "#fff", secondary: "#dfe3fa" },
    },
};

export { theme };
