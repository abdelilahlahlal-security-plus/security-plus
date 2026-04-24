import React, { useCallback, useState } from 'react'
import { TextInput, Button } from '@sanity/ui'
import { StringInputProps, set, unset } from 'sanity'
import { Eye, EyeOff } from 'lucide-react'

export const PasswordInput = (props: StringInputProps) => {
    const { onChange, value = '', elementProps } = props
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const nextValue = event.currentTarget.value
            onChange(nextValue ? set(nextValue) : unset())
        },
        [onChange]
    )

    const toggleShowPassword = useCallback(() => {
        setShowPassword((prev) => !prev)
    }, [])

    return (
        <TextInput
            {...(elementProps as any)}
            onChange={handleChange}
            value={value}
            type={showPassword ? 'text' : 'password'}
            suffix={
                <Button
                    fontSize={1}
                    padding={2}
                    mode="bleed"
                    icon={showPassword ? EyeOff : Eye}
                    onClick={toggleShowPassword}
                    title={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                />
            }
        />
    )
}
