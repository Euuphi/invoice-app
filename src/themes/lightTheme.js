const lightTheme = {
    background: {
        primary: "#f8f8f8",
        secondary: "#fff",
        tertiary: "#f9fafe",
        detailsTotal: "#373b53",
        filterOptions: "#fff",
    },
    button: {
        edit: {
            background: { default: "#f9fafe", hover: "#dfe3fa" },
            text: { default: "#7e88c3", hover: "#7e88c3" },
        },
        saveDraft: {
            background: { default: "#373b53", hover: "#0c0e16" },
            text: "#888eb0",
        },
    },
    icon: {
        invoiceStatus: {
            draft: { background: "#f3f3f5", text: "#373b53" },
            paid: { background: "#f3fcf9", text: "#33d69f" },
            pending: { background: "#fff8f0", text: "#ff8f00" },
        },
    },
    invoiceItem: {
        dueDate: { due: "#888eb0", date: "#7e88c3" },
        name: "#858bb2",
    },
    form: {
        background: "#fff",
        border: "#dfe3fa",
        focus: "#7c5dfa",
    },
    nav: "#373b53",
    text: { primary: "#0c0e16", secondary: "#7e88c3" },
    shadow: {
        medium: "rgba(72, 84, 159, 0.15)",
        light: "rgba(72, 84, 159, 0.03)",
    },
};

export { lightTheme };
