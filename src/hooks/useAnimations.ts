export const useAnimations =()=>{
    const fadeIn = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 1.2,
                delay: 0.3
            },
        },
        exit: {
            opacity: 0,
            transition: {
                ease: "easeOut",
                duration: 1.2,
                delay: 0.3
            },
        }
    }
    return {
        fadeIn
    }
}