"use client"
import React, {useState, useEffect, useRef} from 'react'
import { db } from '../firebase'
import {doc, getDoc } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext'

function fetchCourses() {
    const [loading, setLoading ] = useState(true)
    const [error, setError] = useState(null)
    const [courses, setCourses] = useState(null)

    const { currentUser } = useAuth()
    useEffect(() => {
        async function fetchData() {
            try{
                const docRef = doc(db, "users", currentUser.uid)
                const docSnap = await getDoc(docRef)
                if(docSnap.exists()) {
                    setCourses(docSnap.data().courses)
                }
            } catch (err) {
                setError('failed to load courses')
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return {
    loading, error, courses
  }
}

export default fetchCourses