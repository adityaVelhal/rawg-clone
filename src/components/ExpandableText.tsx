import { Button, Text } from '@chakra-ui/react';
import React, { ReactNode, useState } from 'react';

interface Props {
    children: string;
}

const ExpandableText = ({ children }: Props) => {
    const [expanded, setExpandable] = useState(false);
    const limit = 300;

    if (!children) return null;
    if (children.length <= limit) return <Text>{children}</Text>;

    const text = expanded ? children : children.substring(0, limit) + '...';
    return (
        <div>
            {text}{' '}
            <Button
                size="xs"
                fontWeight="bold"
                colorScheme="yellow"
                marginLeft={1}
                onClick={() => setExpandable(!expanded)}
            >
                {expanded ? 'Show less' : 'Show more'}
            </Button>
        </div>
    );
};

export default ExpandableText;
