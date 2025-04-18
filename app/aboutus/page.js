"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";


export default function About() {
    return (
        <div className="bg-linear-to-r from-cyan-500 to-white-500">
            <div className="flex flex-row mt-10 items-center px-3">
                <h3 className="text-4xl font-bold text-shadow-lg  text-justify mb-4">NTT DATA IS A TOP 10 GLOBAL BUSINESS AND IT SERVICES PROVIDER WITH MORE THAN 120,000 PROFESSIONALS IN OVER 50 COUNTRIES.
                </h3>
            </div>
            <div className="flex flex-row mb-10 items-center px-3">
                <p className="text-lg text-shadow-lg text-justify mb-4">
                    NTT DATA Corporation established a subsidiary, NTT DATA Myanmar Co., Ltd., in Myanmar, and it began operations in September 19, 2012. NTT DATA intends this company to be at the center of its development of new systems for the Asia region, and plans to increase the numbers of employees in the future. Currently, 100~200 employees are supporting NTT DATA Myanmar Co., Ltd, leaded by Mr. Naohiro Kitayama.
                </p>
            </div>
            <div className="flex flex-row my-10 items-center px-3">
                <div className="basis-1/3 mx-3 px-2.5">

                    <Card>
                        <CardHeader>
                            <h4 className="text-3xl font-bold">Company Information</h4>
                        </CardHeader>
                        <hr />
                        <CardContent>
                            <CardTitle>Head Office : </CardTitle>
                            <p>Building No. 17, 1st & 2nd Floor, University Campus,MICT Park, Hlaing Township, Yangon</p>

                            <CardTitle>Established :  </CardTitle>
                            <p>September 19, 2012</p>

                            <CardTitle>President & CEO : </CardTitle>
                            <p>Katana </p>

                            <CardTitle>Read more : : </CardTitle>
                            <p>https://www.nttdata.com/global/en/</p>
                        </CardContent>
                    </Card>


                </div>
                <div class="basis-2/3 mx-3 px-2.5">
                    <Carousel
                         plugins={[
                            Autoplay({
                              delay: 2000,
                            }),
                          ]}
                    >
                        <CarouselContent>
                            <CarouselItem>
                                <img src="/images/1.png" alt="NTT Data 1" className="w-full h-auto" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src="/images/2.jpg" alt="NTT Data 1" className="w-full h-auto" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src="/images/3.jpg" alt="NTT Data 1" className="w-full h-auto" />  
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>

                </div>
            </div>
        </div>
    );
}





