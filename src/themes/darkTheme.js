const darkTheme = {
    background: {
        primary: "#141625",
        secondary: "#1e2139",
        tertiary: "#252945",
        detailsTotal: "#0c0e16",
    },
    button: {
        edit: {
            background: { default: "#252945", hover: "#fff" },
            text: { default: "#dfe3fa", hover: "#7e88c3" },
        },
        saveDraft: {
            background: { default: "#373b53", hover: "#1e2139" },
            text: "#dfe3fa",
        },
    },
    icon: {
        invoiceStatus: {
            draft: { background: "#292c44", text: "#dfe3fa" },
            paid: { background: "#1f2b3f", text: "#33d69f" },
            pending: { background: "#2b2736", text: "#ff8f00" },
        },
    },
    invoiceItem: { dueDate: { due: "#dfe3fa", date: "#dfe3fa" }, name: "#fff" },
    nav: "#1e2139",
    text: { primary: "#fff", secondary: "#dfe3fa" },
    shadow: {
        medium: "rgba(0, 0, 0, 0.15)",
        light: "rgba(0, 0, 0, 0.03)",
    },
};

export { darkTheme };
