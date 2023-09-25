import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import {FC, useCallback, useEffect, useRef, useState} from 'react';

interface ModalProps {
    className?: string;
	isOpen?: boolean;
	onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
	const {className, children, onClose, isOpen} = props;

	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	useEffect(() => {
		if(isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen]);

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if(e.key === 'Escape') {
			closeHandler();
		}
	}, []);

	const closeHandler = () => {
		if(onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	};

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing
	};

	return (
		<div className={classNames(cls.Modal, mods, [className])}>
			<div className={cls.overlay} onClick={closeHandler}>
				<div className={cls.content} onClick={onContentClick}>
					{children}
				</div>
			</div>
		</div>
	);
};