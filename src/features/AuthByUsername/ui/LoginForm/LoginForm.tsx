import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            {error && (
                <div>
                    {error}
                </div>
            )}
            <Input
                autoFocus
                placeholder={t('Введите username')}
                type="text"
                className={cls.input}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                placeholder={t('Введите password')}
                type="text"
                className={cls.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                onClick={onLoginClick}
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
