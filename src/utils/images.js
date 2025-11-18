const files = import.meta.glob("../assets/*.{png,jpg,jpeg,svg}", {
    eager: true,
});

const images = Object.fromEntries(
    Object.entries(files).map(([path, module]) => [
        path.replace("../assets/", ""),
        module.default,
    ])
);

export default images;
