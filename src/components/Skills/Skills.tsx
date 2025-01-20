import {Tooltip} from '@nextui-org/tooltip'
import {Button} from '@nextui-org/react';
import {techStackCategiries, techStackIcons} from "@/data/skills.ts";

const siteConfig = {

}


export const Skills = () => (
    <div
        className="relative col-span-12 row-span-2 md:col-span-9 shadow-xl flex flex-col rounded-xl border-2 bg-beige p-5 sm:p-7">
        <h2>Tech Stack</h2>
        {Object.entries(techStackCategiries).map(
            ([categoryName, categoryItems]) => (
                <div
                    key={categoryName}
                    className="grid sm:grid-cols-2 grid-cols-1 gap-2 items-center border-b-1 border-dashed border-stone-400 last:border-b-0 py-2"
                >
                    <h3 className={'text-xl font-medium fontMono'}>
                        {categoryName}
                    </h3>
                    <ul className="flex gap-2 flex-wrap">
                        {techStackIcons
                            .filter((item) => categoryItems.includes(item.label))
                            .map((item, index) => (
                                <Tooltip
                                    key={index}
                                    content={item.label}
                                >
                                    <Button
                                        isIconOnly={true}
                                    >
                                        <item.icon size="20"/>
                                    </Button>

                                </Tooltip>
                            ))}
                    </ul>
                </div>
            )
        )}
    </div>
)