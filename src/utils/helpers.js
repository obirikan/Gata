export function strip(text) {
  return text.replaceAll("-", " ");
}

export function scrollToElement(element) {
  const navbarHeight = 84;
  const elementPosition = element.offsetTop - navbarHeight;

  console.log("elementPosition", elementPosition);
  window.scrollTo({
    top: elementPosition,
    behavior: "smooth",
  });
}
