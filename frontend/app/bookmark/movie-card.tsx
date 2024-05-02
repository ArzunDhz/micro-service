import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { PlaceHolderImage } from '@/public/images';
import Image from 'next/image';
import React from 'react';


const MovieCard = ({ title }: any) =>
{
    return (
        <>
            <Card>
                <CardHeader>
                    <h2 className="text-lg font-semibold mb-2">{title}</h2>
                </CardHeader>
                <CardContent>
                    <Image
                        alt="Movie Poster"
                        className="w-full h-64 object-cover"
                        height={600}
                        src={PlaceHolderImage}
                        style={{
                            aspectRatio: "400/600",
                            objectFit: "cover",
                        }}
                        width={400}
                    />
                </CardContent>
                <CardFooter>
                    <Button className="w-full" size="sm" variant="outline">
                        Remove from Bookmarks
                    </Button>
                </CardFooter>

            </Card>



        </>
        // <div className="bg-white rounded-lg shadow-md overflow-hidden">
        //     <img
        //         alt="Movie Poster"
        //         className="w-full h-64 object-cover"
        //         height={600}
        //         src={PlaceHolderImage}
        //         style={{
        //             aspectRatio: "400/600",
        //             objectFit: "cover",
        //         }}
        //         width={400}
        //     />
        //     <div className="p-4">
        //         <h2 className="text-lg font-semibold mb-2">{title}</h2>
        //         <Button className="w-full" size="sm" variant="outline">
        //             Remove from Bookmarks
        //         </Button>
        //     </div>
        // </div>
    );
};

export default MovieCard;