import {
    Row,
    Col,
    Form,
    Dropdown,
    DropdownButton,
    Button,
} from 'react-bootstrap'
import Header from '../../../../components/common/Header/header'
import styles from './studyWrite.module.css'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

import Footer from '../../../../components/common/Footer/footer'
import {createPost} from '../../../../modules/reducer/createReducer'
import { uriSave } from '../../../../modules/reducer/urlReducer'
import {useDispatch, useSelector} from 'react-redux'

function StudyWrite() {
    const [Title, setTitle] = useState('')
    const [SubTitle, setSubTitle] = useState('')
    const [Content, setContent] = useState('')
    const [Category, setCategory] = useState('')
    const [copy, setCopy] = useState("")


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const subTitleHandler = (e) => {
        setSubTitle(e.target.value)
    }
    const contentHandler = (e) => {
        setContent(e.target.value)
    }
    const categoryHandler = (e) => {
        setCategory(e.target.value)
    }
    const imageHandler = (e) => {
        console.log(e.target.files[0])
        setCopy(e.target.files[0])
        console.log(copy)
      
    }

    const createData = () => {
        const inputData = new FormData();
        
        inputData.append('category', Category)
        inputData.append('title', Title)
        inputData.append('sub_title', SubTitle)
        inputData.append('body', Content)
        inputData.append('image', copy)
        console.log(inputData)
        dispatch(createPost(inputData))
        // setTitle('')
        // setSubTitle('')
        // setContent('')
        // setCategory('')
        navigate('/myRecord')
        dispatch(uriSave('/myRecord'))
    }
      // const _inputData = {
        //     // id:'',
        //     category: Category,
        //     title: Title,
        //     sub_title: SubTitle,
        //     body: Content,
        //     image: Image[0]
        // }

    const goBack = () =>{
        navigate('/myRecord')
    }
    

    
    return (
        <div>
            <div className={styles.writeBg}>
            <div className={styles.writeText}>
            <Row className={styles.title}>
                {/* -------------title-------------- */}
                <Col sm style={{ marginBottom: '20px' }}>
                    <Form.Control
                        type="text"
                        placeholder="????????? ???????????????"
                        onChange={titleHandler}
                        style={{border:'2px solid green'}}
                        
                    />
                </Col>
                {/* -------------Category-------------- */}

                <Col sm>
                <Form.Control
                        type="text"
                        placeholder="??????????????? ???????????????(10??? ??????)"
                        onChange={categoryHandler}
                        style={{border:'2px solid green'}}
                        maxLength='10'
                    />
                </Col>
            </Row>
            {/* -------------Subtitle-------------- */}

            <Row className={styles.subTitle}>
                <Form.Label></Form.Label>
                <Col sm style={{ marginBottom: '20px' }}>
                    <Form.Control
                    onChange={subTitleHandler}
                        type="text"
                        placeholder="?????? ????????? ???????????????"
                        style={{border:'2px solid green'}}

                    />
                </Col>
            </Row>
            {/* -------------Content-------------- */}

            <Row className={styles.content}>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Text area</Form.Label>
                    <Row className={styles.Title}>
                        <Col
                            sm
                            style={{ marginBottom: '0px', height: '350px' }}
                        >
                            <Form.Control
                                as="textarea"
                                rows={6}
                                onChange={contentHandler}
                                style={{border:'2px solid green', height:'300px'}}

                            />
                        </Col>
                    </Row>
                    <input type='file' onChange={imageHandler}></input>
                </Form.Group>
            </Row>
            <div className={styles.buttonBg}>
            <button className={styles.button} onClick={createData}>
                 Post
                </button>
                <button className={styles.button} onClick={goBack}>
                 Cancel
                </button>
            </div>
            
            </div>
            <Footer></Footer>
        </div>
        </div>
        
    )
}

export default StudyWrite
