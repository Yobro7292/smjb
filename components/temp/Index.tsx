const Index = () => {
  return (
    <div
        className={`min-h-screen w-full flex flex-col justify-start items-center ${poppins.className}`}
      >
        <Notifications position="top-center" zIndex={2077} />
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: "light",
          }}
        >
          <div className={`container flex flex-col h-screen w-full`}>
            <div className="h-[50vh] sm:h-[70vh] w-full bg-gray-400 relative">
              <Carousel
                align={"start"}
                loop
                draggable={false}
                plugins={[autoplay.current]}
                className="h-full w-full"
                slideSize="100%"
                height={"100%"}
                slideGap="xs"
                withControls={false}
                withIndicators
                styles={{
                  indicator: {
                    width: "2.6rem",
                    height: "0.5rem",
                    transition: "width 250ms ease",
                    "&[data-active]": {
                      width: "3.6rem",
                      backgroundColor: "white",
                    },
                    "&[aria-hidden]": {
                      backgroundColor: "white",
                    },
                  },
                }}
              >
                {caraosulImages.map((element, key) => {
                  return (
                    <Carousel.Slide
                      key={key}
                      className="w-full h-full relative bg-gray-300 flex justify-center items-center bg-cover bg-center"
                    >
                      <Component source={element.src} placeholder={""} />
                    </Carousel.Slide>
                  );
                })}
              </Carousel>
              <div className="w-full flex flex-col justify-center items-center relative">
                <div className="bg-white shadow-2xl rounded-lg sm:rounded-xl w-[90%] lg:w-[80%] xl:w-[60%] h-[26rem] sm:h-[17rem] -mt-8 absolute -top-14 sm:top-auto flex flex-col justify-start px-4 lg:px-10 py-2">
                  <p className="text-blue-500 flex items-center text-xs mt-4">
                    <Image
                      src={verifiedIcon}
                      width={19}
                      height={19}
                      alt={"verified-icon"}
                    />
                    <span> &nbsp; Verified</span>
                  </p>

                  <p className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">
                    Shree Mahuva Tapagach Jain Bhojanshala
                  </p>
                  <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center text-sm">
                    <span className=" mt-2">
                      Bhojanshala In Mahuva &nbsp; &nbsp; • &nbsp; &nbsp;
                    </span>
                    <div className="flex justify-center items-center">
                      {" "}
                      <span className="text-green-700 font-medium mt-2">
                        Open Now &nbsp; &nbsp; •
                      </span>{" "}
                      <span className="mt-2">&nbsp; &nbsp; 4.6 </span>
                      <div className="flex justify-center items-center">
                        <Image
                          src={star}
                          width={20}
                          height={20}
                          alt="star"
                          className="ml-2"
                          loading="lazy"
                        />
                        <Image
                          src={star}
                          width={20}
                          height={20}
                          alt="star"
                          loading="lazy"
                        />
                        <Image
                          src={star}
                          width={20}
                          height={20}
                          alt="star"
                          loading="lazy"
                        />
                        <Image
                          src={star}
                          width={20}
                          height={20}
                          alt="star"
                          loading="lazy"
                        />
                        <Image
                          src={halfStar}
                          width={20}
                          height={20}
                          alt="star-half"
                          loading="lazy"
                        />
                      </div>
                      <span className=" sm:mt-2"> &nbsp; (137)</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center w-full">
                    <div className="w-full flex flex-col sm:flex-row justify-start  sm:justify-between items-start sm:items-center py-2 my-4">
                      <a
                        className="px-5 py-3 w-full sm:w-auto my-1 sm:my-0 rounded-lg text-blue-700 border-2 border-blue-700 text-xs sm:text-sm font-medium flex justify-center items-center"
                        href="tel:02844222259"
                        target="_blank"
                      >
                        <Image
                          src={call}
                          width={20}
                          height={20}
                          alt="call"
                          className="mr-2"
                          loading="lazy"
                        />{" "}
                        Call 02844 222 259
                      </a>
                      <a
                        className="px-6 py-3 w-full sm:w-auto my-1 sm:my-0 rounded-lg text-green-600 border-2 border-green-600 text-xs sm:text-sm font-medium flex justify-center items-center"
                        href="https://api.whatsapp.com/send?phone=917574993699&text=Jai%20Jinendra%20%F0%9F%99%8F%0A"
                        target="_blank"
                      >
                        {/* href="https://wa.link/lo9fhp" */}
                        <Image
                          src={whatsapp}
                          width={20}
                          height={20}
                          alt="whatsapp"
                          className="mr-2"
                          loading="lazy"
                        />{" "}
                        Chat on Whatsapp
                      </a>
                      <a
                        className="px-6 py-3 w-full sm:w-auto my-1 sm:my-0 rounded-lg text-blue-700 border-2 border-blue-700 text-xs sm:text-sm font-medium flex justify-center items-center"
                        href="https://goo.gl/maps/Xt7r1SfPsJRhZevE6"
                        target="_blank"
                      >
                        <Image
                          src={location}
                          width={20}
                          height={20}
                          alt="location"
                          className="mr-2"
                          loading="lazy"
                        />{" "}
                        See on Map
                      </a>
                    </div>
                    <Image
                      src={downArrow}
                      alt="arrow"
                      width={40}
                      height={40}
                      className="animate-bounce"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              {/* adding onfo  */}
              <div className="flex flex-col justify-start items-center p-4 bg-white mb-5 mt-[22rem] sm:mt-[10rem]">
                <div className="w-full sm:w-[80%] lg:w-[60%] py-4 sm:py-8 px-6 sm:px-8 shadow-lg rounded-lg my-3 flex flex-col justify-between items-start">
                  <p className="text-lg font-medium text-black text-left mb-3">
                    Please provide your feedback
                  </p>
                  <input
                    type="text"
                    className={`w-full px-3 py-3 rounded-lg border border-blue-600 text-base font-medium text-black my-2 focus:outline-none ${poppins.className}`}
                    placeholder={"Your name"}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                  />
                  <input
                    type="text"
                    className={`w-full px-3 py-3 rounded-lg border border-blue-600 text-base font-medium text-black my-2 focus:outline-none ${poppins.className}`}
                    placeholder={"Your message to us"}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                  />
                  <button
                    className="w-full px-3 py-3 rounded-lg border bg-blue-600 text-sm font-medium text-white my-2 disabled:bg-neutral-500 disabled:text-white disabled:cursor-not-allowed"
                    disabled={dis}
                    onClick={async () => {
                      if (name !== "" && message !== "") {
                        setDis(true);
                        const res = await fetch("/api/user", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            userMessage: {
                              name,
                              message,
                            },
                          }),
                        });
                        const resData = await res.json();
                        if (resData && resData.res.success) {
                          notifications.show({
                            title: "Success",
                            message: "Thank you so much for you feedback",
                            styles: (theme) => ({
                              root: {
                                backgroundColor: "#fff",
                                borderColor: "rgb(37 99 235)",

                                "&::before": {
                                  backgroundColor: "rgb(37 99 235)",
                                },
                              },

                              title: { color: "rgb(37 99 235)" },
                              description: { color: "#2b2b2b" },
                              closeButton: {
                                color: "#000",
                                "&:hover": {
                                  backgroundColor: "rgb(37 99 235)",
                                },
                              },
                            }),
                          });
                          setDis(false);
                        } else {
                          setDis(false);
                        }
                      }
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div
                  className={`text-xs w-full flex justify-center items-center px-4 bg-neutral-200 py-3 rounded-lg text-neutral-700 mb-3 text-center font-medium leading-5 mt-4`}
                >
                  This website is currently under development We will launch the
                  complete website soon.
                  <br />
                  <br />
                  જય જિનેન્દ્ર, આપણા જૈન લોકોને ઉત્તમ સુવિધા મળી રહે તથા અહી કોઈ
                  અગવડતા ન અનુભવાય તે માટે ડિજિટલ સ્વરૂપે આવવાનો અમારો આ નાનકડો
                  પ્રયાસ છે.
                  <br />
                  આપના અભિપ્રાયો અમને જરૂરથી જણાવશો જેથી કરી અમને પૂરતું
                  પ્રોત્સાહન મળી શકે સાથો સાથ આપ અમારી વેબસાઇટ પરથી શું અપેક્ષા
                  રાખો છો તે પણ જણાવશો.
                  <br />
                  Jay Jinendra, This is our small attempt to come in digital
                  form so that our Jain people get excellent facilities and do
                  not feel any discomfort here. Please tell us your opinions on
                  so that we can get enough encouragement and also tell us what
                  you expect from our website.
                </div>
              </div>
            </div>
          </div>
        </MantineProvider>
      </div>
  )
}

export default Index