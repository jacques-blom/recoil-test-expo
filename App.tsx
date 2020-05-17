import React from 'react'
import {StyleSheet, Text, View, TextInput as RNTextInput} from 'react-native'
import {
    RecoilRoot,
    useRecoilState,
    atom,
    selector,
    useRecoilValue,
    // @ts-ignore
} from 'recoil'

const charCountState = selector({
    key: 'charCountState',
    get: ({get}: any) => {
        const text = get(textState)
        return text.length
    },
})

function CharacterCount() {
    const count = useRecoilValue(charCountState)

    return (
        <Text>
            <Text style={styles.bold}>Character Count:</Text> {count}
        </Text>
    )
}

const textState = atom({
    key: 'textState',
    default: '',
})

function TextInput() {
    const [text, setText] = useRecoilState(textState)

    return (
        <View>
            <RNTextInput style={styles.textInput} value={text} onChangeText={setText} />
            <View style={styles.spacer} />
            <Text>
                <Text style={styles.bold}>Echo:</Text> {text}
            </Text>
        </View>
    )
}

const Counter: React.FC = () => (
    <View style={styles.container}>
        <TextInput />
        <View style={styles.spacer} />
        <CharacterCount />
    </View>
)

export default function App() {
    return (
        <RecoilRoot>
            <Counter />
        </RecoilRoot>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    textInput: {
        padding: 16,
        paddingBottom: 14,
        borderWidth: 1,
        borderColor: '#3578e5',
        borderRadius: 3,
    },
    bold: {
        fontWeight: '600',
    },
    spacer: {
        height: 20,
    },
})
