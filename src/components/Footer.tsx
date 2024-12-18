import {Link} from "@nextui-org/link";

export default () => {
    return (
        <footer className="w-full bg-content2 dark:bg-content1 relative z-50">
            <div className="container mx-auto p-10 max-w-6xl">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between">
                        <div className="flex flex-col gap-2">
                            {/*Right Text*/}
                        </div>
                        <div className="flex flex-col sm:w-1/2 sm:text-right gap-2">
                            <p className="text-xs w-full text-balance">
                                Made by <Link href={"https://github.com/tongducthanhnam"}>
                                Terasumi
                            </Link> with Astro, React, NextUI & Tailwind CSS in
                                TypeScript. With suport from acelity, threeJS, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
