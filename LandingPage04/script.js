// Animate .imagecontainer width to 100% (forward, then reset)
gsap.to(".imagecontainer", {
    width: "100%",
    ease: "expo.inOut",
    duration: 2,
    stagger: 2,
    repeat: -1,  // Infinite loop (no yoyo)
    repeatDelay: 0 // Optional delay before repeat
});

// Animate text h1 down (top: 0)
gsap.to(".text h1", {
    top: 0,
    ease: "expo.inOut",
    duration: 2,
    stagger: 2,
    repeat: -1,  // Infinite loop
    repeatDelay: 0
});

// Animate text h1 up (top: -100%) after delay
gsap.to(".text h1", {
    top: "-100%",
    delay: 2,  // Starts after 2 seconds
    ease: "expo.inOut",
    duration: 2,
    stagger: 2,
    repeat: -1,  // Infinite loop
    repeatDelay: 0
});