const workElement = document.querySelector(".fetch-work")
const workHours = document.querySelector(".hours-work-container")
const prevWorkHours = document.querySelector(".prev-hours-work-container")

const playElement = document.querySelector(".fetch-play")
const playHours = document.querySelector(".hours-play-container")
const prevPlayHours = document.querySelector(".prev-hours-play-container")

const studyElement = document.querySelector(".fetch-study")
const studyHours = document.querySelector(".hours-study-container")
const prevStudyHours = document.querySelector(".prev-hours-study-container")

const exerciseElement = document.querySelector(".fetch-exercise")
const exerciseHours = document.querySelector(".hours-exercise-container")
const prevExerciseHours = document.querySelector(".prev-hours-exercise-container")

const socialElement = document.querySelector(".fetch-social")
const socialHours = document.querySelector(".hours-social-container")
const prevSocialHours = document.querySelector(".prev-hours-social-container")

const selfCareElement = document.querySelector(".fetch-selfCare")
const selfCareHours = document.querySelector(".hours-selfCare-container")
const prevSelfCareHours = document.querySelector(".prev-hours-selfCare-container")

const getDataDaily = async () => {
    const res = await fetch("https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json");
    const data = await res.json();
    generateReportDaily(data)
   
}
const generateReportDaily =(data) =>{
    workElement.innerHTML = `${data[0].title}`;
    workHours.innerHTML = `${data[0].timeframes.daily.current}hrs`;
    prevWorkHours.innerHTML = `Yesterday - ${data[0].timeframes.daily.previous}hrs`;

    playElement.innerHTML = `${data[1].title}`;
    playHours.innerHTML = `${data[1].timeframes.daily.current}hrs`;
    prevPlayHours.innerHTML = `Yesterday - ${data[1].timeframes.daily.previous}hrs`;

    studyElement.innerHTML = `${data[2].title}`;
    studyHours.innerHTML = `${data[2].timeframes.daily.current}hrs`;
    prevStudyHours.innerHTML = `Yesterday - ${data[2].timeframes.daily.previous}hrs`;

    exerciseElement.innerHTML = `${data[3].title}`;
    exerciseHours.innerHTML = `${data[3].timeframes.daily.current}hrs`;
    prevExerciseHours.innerHTML = `Yesterday - ${data[3].timeframes.daily.previous}hrs`;

    socialElement.innerHTML = `${data[4].title}`;
    socialHours.innerHTML = `${data[4].timeframes.daily.current}hrs`;
    prevSocialHours.innerHTML = `Yesterday - ${data[4].timeframes.daily.previous}hrs`;

    selfCareElement.innerHTML = `${data[5].title}`;
    selfCareHours.innerHTML = `${data[5].timeframes.daily.current}hrs`;
    prevSelfCareHours.innerHTML = `Yesterday - ${data[5].timeframes.daily.previous}hrs`;
}

const getDataWeekly = async () => {
    const res = await fetch("https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json");
    const data = await res.json();
    generateReportWeekly(data)
   
}

const generateReportWeekly =(data, ) =>{
    workElement.innerHTML = `${data[0].title}`;
    workHours.innerHTML = `${data[0].timeframes.weekly.current}hrs`;
    prevWorkHours.innerHTML = `Last Week - ${data[0].timeframes.weekly.previous}hrs`;

    playElement.innerHTML = `${data[1].title}`;
    playHours.innerHTML = `${data[1].timeframes.weekly.current}hrs`;
    prevPlayHours.innerHTML = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;

    studyElement.innerHTML = `${data[2].title}`;
    studyHours.innerHTML = `${data[2].timeframes.weekly.current}hrs`;
    prevStudyHours.innerHTML = `Last Week - ${data[2].timeframes.weekly.previous}hrs`;

    exerciseElement.innerHTML = `${data[3].title}`;
    exerciseHours.innerHTML = `${data[3].timeframes.weekly.current}hrs`;
    prevExerciseHours.innerHTML = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;

    socialElement.innerHTML = `${data[4].title}`;
    socialHours.innerHTML = `${data[4].timeframes.weekly.current}hrs`;
    prevSocialHours.innerHTML = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;

    selfCareElement.innerHTML = `${data[5].title}`;
    selfCareHours.innerHTML = `${data[5].timeframes.weekly.current}hrs`;
    prevSelfCareHours.innerHTML = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
}

const getDataMonthly = async () => {
    const res = await fetch("https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json");
    const data = await res.json();
    generateReportMonthly(data)
}

const generateReportMonthly =(data ) =>{
    workElement.innerHTML = `${data[0].title}`;
    workHours.innerHTML = `${data[0].timeframes.monthly.current}hrs`;
    prevWorkHours.innerHTML = `Last Month - ${data[0].timeframes.monthly.previous}hrs`;

    playElement.innerHTML = `${data[1].title}`;
    playHours.innerHTML = `${data[1].timeframes.monthly.current}hrs`;
    prevPlayHours.innerHTML = `Last Month - ${data[1].timeframes.monthly.previous}hrs`;

    studyElement.innerHTML = `${data[2].title}`;
    studyHours.innerHTML = `${data[2].timeframes.monthly.current}hrs`;
    prevStudyHours.innerHTML = `Last Month - ${data[2].timeframes.monthly.previous}hrs`;

    exerciseElement.innerHTML = `${data[3].title}`;
    exerciseHours.innerHTML = `${data[3].timeframes.monthly.current}hrs`;
    prevExerciseHours.innerHTML = `Last Month - ${data[3].timeframes.monthly.previous}hrs`;

    socialElement.innerHTML = `${data[4].title}`;
    socialHours.innerHTML = `${data[4].timeframes.monthly.current}hrs`;
    prevSocialHours.innerHTML = `Last Month - ${data[4].timeframes.monthly.previous}hrs`;

    selfCareElement.innerHTML = `${data[5].title}`;
    selfCareHours.innerHTML = `${data[5].timeframes.monthly.current}hrs`;
    prevSelfCareHours.innerHTML = `Last Month - ${data[5].timeframes.monthly.previous}hrs`;
}


getDataDaily()
