'use client';

import Modal from '@/app/components/Modal';
import Image from 'next/image';
import React from 'react';

type Props = {
    isOpen?: boolean;
    onClose: () => void;
    src?: string | null;
}

const ImageModal = ({ src, isOpen, onClose }: Props) => {

    if (!src) {
        return null;
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="w-80 h-80">
                <Image
                    className="object-cover"
                    fill
                    alt="Image"
                    src={src}
                />
            </div>
        </Modal>
    )
}

export default ImageModal