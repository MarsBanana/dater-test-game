import React, {useEffect, useState} from "react"
import {Popup, List, ListInput, Button} from "framework7-react"
import {useDispatch, useSelector} from "react-redux"
import {saveName} from "../../store/actions"
import {IState} from "../../store/types"

const popupCustomStyle = {
    maxHeight: "180px",
    marginTop: "-120px",
}

const NameForm: React.FC = () => {
    const [isNameFormOpen, setIsNameFormOpen] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const dispatch = useDispatch()

    const playerName = useSelector((state: IState) => state.playerName)

    useEffect(() => {
        if (playerName === null) {
            setIsNameFormOpen(true)
        }
    }, [])

    const handleConfirm = () => {
        try {
            if (!name) {
                throw new Error("Empty string")
            }

            dispatch(saveName(name))
            setIsNameFormOpen(false)
        } catch {
            setIsNameFormOpen(true)
        }
    }
    return (
        <Popup closeByBackdropClick={false} opened={isNameFormOpen} style={popupCustomStyle}>
            <List inlineLabels>
                <ListInput
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    value={name}
                    type="text"
                    label="Name"
                    placeholder="Your name"
                    autofocus
                />
            </List>
            <Button onClick={handleConfirm}>Confirm</Button>
        </Popup>
    )
}

export default NameForm
