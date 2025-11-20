function LoadingAnimated() {
    return (
        <div className="flex justify-center items-center h-60">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <p className="ml-3 text-lg">Loading...</p>
        </div>
    );
}

export default LoadingAnimated