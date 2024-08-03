export function responsiveMedia(selector, mq, mobileContent, desktopContent) {
  const d = document,
    w = window;

  let mql = w.matchMedia(mq);

  const responsiveContent = (mq) => {
    //console.log(mql, mq.matches);
    if (mq.matches) {
      d.querySelector(selector).innerHTML = desktopContent;
    } else {
      d.querySelector(selector).innerHTML = mobileContent;
    }
  };

  mql.addEventListener("change", (e) => responsiveContent(e));
  w.addEventListener("load", (e) => responsiveContent(mql));
}
