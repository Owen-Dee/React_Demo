import * as React from 'react';

// define interface
interface IAppProps {
    text: string;
    onChangeText: () => void;
    onButtonClick: () => void
}

// define component
class App extends React.Component<IAppProps, any> {
    constructor(props: IAppProps) {
        super(props);
    }

    public render() {
        debugger
        const { text, onChangeText, onButtonClick } = this.props;
        return (
            <div>
                <h1 onClick={onChangeText}>{text}</h1>
                <button onClick={onButtonClick}>Click Me!</button>
            </div>
        );
    };
}

export default App;