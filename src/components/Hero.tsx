import {faDownload, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button, Image, Link, Popover, PopoverContent, PopoverTrigger, Spacer,} from '@nextui-org/react';
import * as emoji from 'node-emoji';
import {useEffect, useState} from 'react';

const sentences = [
    'Hi there! :blush:',
    'Nice to meet you! :relaxed:',
    'How are you? :grinning:',
    'Feeling good? :ok_hand:',
    'Great weather, right? :sunny:',
    'What brings you here? :thinking:',
    'Is there something bothering you? :confused:',
    'Did I say something wrong? :grimacing:',
    'Are you sure everything is okay? :neutral_face:',
    'I sense some frustration :expressionless:',
    "If something's wrong, we can talk about it :speech_balloon:",
    'Are you intentionally trying to annoy me now? :unamused:',
    "I'm starting to lose my patience :angry:",
    'Seriously, stop it! :symbols_over_mouth:',
    "You're testing my limits! :triumph:",
    'Enough is enough! :rage:',
];

export default () => {
    const [sentenceIndex, setSentenceIndex] = useState(0);
    const [emotion, setEmotion] = useState<'smiling' | 'angry' | 'enraged'>(
        'smiling'
    );
    const [isImageTriggerable, setIsImageTriggerable] = useState(true);
    const [isDocumentReady, setIsDocumentReady] = useState(false);

    useEffect(() => {
        setIsDocumentReady(true);
    }, []);

    const handleClose = () => {
        if (sentenceIndex < sentences.length - 1) {
            setSentenceIndex((prevSentenceIndex) => prevSentenceIndex + 1);

            setIsImageTriggerable(false);

            setTimeout(() => {
                setIsImageTriggerable(true);
            }, 100);
        }
    };

    const handleOpenChange = (isPopoverOpen: boolean) => {
        if (isPopoverOpen) {
            if (sentenceIndex === sentences.length - 1) {
                setEmotion('enraged');
            } else if (sentenceIndex > sentences.length - 5) {
                setEmotion('angry');
            } else {
                setEmotion('smiling');
            }
        }
    };

    return (
        <div className="mt-10 flex flex-col lg:flex-row items-center gap-20 pb-10 w-full">
            <div className="text-center lg:text-left lg:w-1/2">
                <div className="text-2xl sm:text-3xl">
                    <p className="text-4xl">
                        {emotion !== 'enraged' ? 'Hello!' : 'F&$k $*#!'}
                        <span
                            className={`ml-1 inline-block ${emotion !== 'enraged' ? 'origin-[70%_70%] animate-wave' : ''}`}
                        >
							{emoji.emojify(emotion !== 'enraged' ? ':wave:' : ':fu:')}
						</span>
                    </p>
                    <Spacer y={12}/>
                    <p className="leading-snug">
                        I'm{' '}
                        <span
                            className="font-bold from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-gradient-to-r">
							Tống Đức Thành Nam
						</span>
                        , A Software Engineer based in Ho Chi Minh city, Vietnam. I'm passionate about building
                        software that solves real-world problems and helps people.
                    </p>
                    <Spacer y={12}/>
                    <div className="flex flex-row flex-wrap gap-4 justify-center items-center lg:justify-start">
                        <Button
                            className="w-full md:w-auto"
                            as={Link}
                            href="mailto:tongducthanhnam@gmail.com"
                            color="primary"
                            endContent={<FontAwesomeIcon icon={faEnvelope}/>}
                            size="lg"
                        >
                            Contact me
                        </Button>
                        <Button
                            className="w-full md:w-auto"
                            as={Link}
                            href="tongducthanhnam.pdf"
                            download
                            isExternal
                            color="default"
                            variant="flat"
                            endContent={<FontAwesomeIcon icon={faDownload}/>}
                            size="lg"
                        >
                            Download CV
                        </Button>
                    </div>
                </div>
            </div>
            <div className="text-center lg:text-right lg:w-1/2">
                <div className="flex justify-end items-center">
                    <Popover
                        placement="bottom"
                        showArrow={true}
                        size="lg"
                        onClose={handleClose}
                        onOpenChange={handleOpenChange}
                        classNames={{
                            trigger: `${!isImageTriggerable ? 'pointer-events-none' : 'cursor-pointer'} aria-expanded:scale-100 aria-expanded:opacity-100`,
                        }}
                    >
                        <PopoverTrigger>
                            <div className="h-64 md:h-80 w-64 md:w-80">
                                {isDocumentReady && (
                                    <div className="animate-fade-in">
                                        <Image

                                            isBlurred
                                            src="/images/avatar.webp"
                                            className="animate-levitate w-64 md:w-80 select-none"
                                            alt="Smiling memoji"
                                            hidden={emotion !== 'smiling'}
                                        />
                                        <Image
                                            isBlurred
                                            src="/images/avatar.jpeg"
                                            className="animate-levitate w-64 md:w-80 select-none"
                                            alt="Angry memoji"
                                            hidden={emotion !== 'angry'}
                                        />
                                        <Image
                                            isBlurred
                                            src="/images/avatar.jpeg"
                                            className="animate-levitate w-64 md:w-80 select-none"
                                            alt="Enraged memoji"
                                            hidden={emotion !== 'enraged'}
                                        />
                                    </div>
                                )}
                            </div>
                        </PopoverTrigger>
                        <PopoverContent>
                            {emoji.emojify(sentences[sentenceIndex])}
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    );
};
