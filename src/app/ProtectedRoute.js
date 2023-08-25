"use client"
import React, { useEffect } from 'react'

import { useAuth } from './context/AuthContext'
import { useRouter } from 'next/navigation'

const ProtectedRoute = ({children}) => {
    const {user} = useAuth()
    const router = useRouter()

    useEffect(() => {
        if(!user) {
            router.push('/')
        }
    }, [router, user])

    return <>{user ? children : null }</>
}

export default ProtectedRoute;