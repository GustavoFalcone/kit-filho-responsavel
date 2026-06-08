const video = document.querySelector(".video-placeholder");
const countdowns = document.querySelectorAll("[data-countdown]");
const readingProgressBar = document.querySelector("#reading-progress-bar");
const offerSection = document.querySelector("#oferta");
const revealTargets = [
  ".top-offer",
  ".site-navbar",
  ".hero-copy",
  ".hero-video",
  ".identity-bar",
  ".audience-copy",
  ".audience-image",
  ".audience-card",
  ".problem-panel",
  ".solution-panel",
  ".bridge-transition",
  ".bridge-list li",
  ".section-heading",
  ".pain-section .container",
  ".pain-item",
  ".impact",
  ".step-card",
  ".center-action",
  ".toolkit-heading",
  ".toolkit-card",
  ".materials-heading",
  ".material-card",
  ".closing-line",
  ".check-list li",
  ".offer-countdown",
  ".offer-card",
  ".guarantee-card",
  ".final-section .container",
  "details",
  ".footer"
];

document.documentElement.classList.add("reveal-ready");

if (readingProgressBar && offerSection) {
  let progressFrame;

  const updateReadingProgress = () => {
    const targetScroll = Math.max(offerSection.offsetTop - window.innerHeight * 0.35, 1);
    const progress = Math.min(Math.max(window.scrollY / targetScroll, 0), 1);
    readingProgressBar.style.width = `${progress * 100}%`;
    progressFrame = undefined;
  };

  const requestProgressUpdate = () => {
    if (progressFrame) return;
    progressFrame = requestAnimationFrame(updateReadingProgress);
  };

  updateReadingProgress();
  window.addEventListener("scroll", requestProgressUpdate, { passive: true });
  window.addEventListener("resize", requestProgressUpdate);
}

const revealElements = document.querySelectorAll(revealTargets.join(","));

revealElements.forEach((element, index) => {
  element.classList.add("reveal");

  if (element.matches(".hero-copy, .audience-copy, .problem-panel, .toolkit-heading, .pain-section .container, .final-section .container")) {
    element.dataset.reveal = "slide-left";
  }

  if (element.matches(".hero-video, .audience-image, .solution-panel, .offer-card")) {
    element.dataset.reveal = "zoom";
  }

  if (element.matches(".step-card, .toolkit-card, .pain-item, .audience-card, .bridge-list li, details")) {
    const groupIndex = Array.from(element.parentElement.children).indexOf(element);
    element.style.setProperty("--reveal-delay", `${Math.min(groupIndex * 45, 260)}ms`);
  } else {
    element.style.setProperty("--reveal-delay", `${Math.min(index * 8, 80)}ms`);
  }
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

if (countdowns.length) {
  const timeZone = "America/Sao_Paulo";
  const zonedFormatter = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  });

  const getZonedParts = (date) => {
    const parts = zonedFormatter.formatToParts(date);

    return Object.fromEntries(
      parts
        .filter(({ type }) => type !== "literal")
        .map(({ type, value }) => [type, Number(value)])
    );
  };

  const zonedTimeToUtc = ({ year, month, day, hour = 0, minute = 0, second = 0 }) => {
    const desiredAsUtc = Date.UTC(year, month - 1, day, hour, minute, second);
    let utcTime = desiredAsUtc;

    // Two passes account for the time-zone offset at the target instant.
    for (let pass = 0; pass < 2; pass += 1) {
      const zoned = getZonedParts(new Date(utcTime));
      const representedAsUtc = Date.UTC(
        zoned.year,
        zoned.month - 1,
        zoned.day,
        zoned.hour,
        zoned.minute,
        zoned.second
      );
      utcTime = desiredAsUtc - (representedAsUtc - utcTime);
    }

    return utcTime;
  };

  const getNextBrasiliaMidnight = (now) => {
    const brasiliaNow = getZonedParts(now);
    const nextDay = new Date(Date.UTC(brasiliaNow.year, brasiliaNow.month - 1, brasiliaNow.day + 1));

    return zonedTimeToUtc({
      year: nextDay.getUTCFullYear(),
      month: nextDay.getUTCMonth() + 1,
      day: nextDay.getUTCDate()
    });
  };

  let targetTime = getNextBrasiliaMidnight(new Date());
  let lastRenderedValue = "";

  const updateCountdown = () => {
    const now = new Date();

    if (now.getTime() >= targetTime) {
      targetTime = getNextBrasiliaMidnight(now);
    }

    const remainingSeconds = Math.max(0, Math.ceil((targetTime - now.getTime()) / 1000));
    const hours = String(Math.floor(remainingSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(remainingSeconds % 60).padStart(2, "0");
    const renderedValue = `${hours}:${minutes}:${seconds}`;

    if (renderedValue !== lastRenderedValue) {
      countdowns.forEach((countdown) => {
        countdown.textContent = renderedValue;
      });
      lastRenderedValue = renderedValue;
    }
  };

  updateCountdown();
  setInterval(updateCountdown, 250);
}

if (video) {
  video.addEventListener("click", () => {
    video.classList.add("video-clicked");
    video.setAttribute("aria-label", "Vídeo placeholder selecionado");
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll("details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    document.querySelectorAll("details").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.open = false;
      }
    });
  });
});
