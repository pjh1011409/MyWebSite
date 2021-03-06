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
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Footer from '../../../../components/common/Footer/footer'
function StudyWrite() {
    const [inputTitle, setInputTitle] = useState('')
    const [inputSubTitle, setInputSubTitle] = useState('')
    const [inputContent, setInputContent] = useState('')
    const [inputCategory, setInputCategory] = useState('')
    const navigate = useNavigate()

    const titleHandler = (event) => {
        setInputTitle(event.target.value)
    }
    const subTitleHandler = (event) => {
        setInputSubTitle(event.target.value)
    }
    const contentHandler = (event) => {
        setInputContent(event.target.value)
    }
    const categoryHandler = (event) => {
        setInputCategory(event.target.value)
    }
    const onClickHandler = (event) => {
        axios
            .post('http://127.0.0.1:8000/notes/create', {
                category: inputCategory,
                subtitle: inputSubTitle,
                title: inputTitle,
                content: inputContent,
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
        navigate('/myRecord')
        window.location.reload(true)
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
                    <select onChange={(e) => categoryHandler(e)}                         style={{border:'2px solid green'}}
>
                        <option value="??????">????????????</option>
                        <option value="React">React</option>
                        <option value="javaScript">JavaScript</option>
                    </select>
                </Col>
            </Row>
            {/* -------------Subtitle-------------- */}

            <Row className={styles.subTitle}>
                <Form.Label></Form.Label>
                <Col sm style={{ marginBottom: '20px' }}>
                    <Form.Control
                    onChange={(e) => subTitleHandler(e)}
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
                            style={{ marginBottom: '20px', height: '300px' }}
                        >
                            <Form.Control
                                as="textarea"
                                rows={6}
                                onChange={contentHandler}
                                style={{border:'2px solid green', height:'300px'}}

                            />
                        </Col>
                    </Row>
                </Form.Group>
            </Row>
            <div className={styles.buttonBg}>
            <button className={styles.button} onClick={onClickHandler}>
                 Post
                </button>
                <button className={styles.button} onClick={onClickHandler}>
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
