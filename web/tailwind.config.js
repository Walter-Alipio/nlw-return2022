module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                brand: {
                    300: "#996DFF",
                    500: "#8257e6",
                },
            },
            borderRadius: {
                md: "4px", //sobrescrevendo o padrão da biblioteca para ter o tamanho desejado pelo designer
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
