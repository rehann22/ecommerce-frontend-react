function LoadingAnimated() {
    return (
        <div className="flex justify-center items-center h-60">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <p className="ml-3 text-sm text-[#3C4242]">Loading...</p>
        </div>
    );
}

export default LoadingAnimated