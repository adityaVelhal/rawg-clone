import {
    FaWindows,
    FaPlaystation,
    FaApple,
    FaLinux,
    FaAndroid,
    FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../models/Games';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: {[key: string] : IconType} = {
        pc: FaWindows,
        xbox: FaXbox,
        playstation: FaPlaystation,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web:BsGlobe,
        android: FaAndroid
    }
    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                <Icon key={platform.id} as={iconMap[platform.slug]} color='Gray' />
            ))}
        </HStack>
    );
};

export default PlatformIconList;
