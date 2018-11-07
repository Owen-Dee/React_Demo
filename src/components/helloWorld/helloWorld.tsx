import * as React from 'react';
import './helloWorld.scss';

class HelloWorld extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const name = 'Goldmantis';
        return (
            <div className="container">
                <div className="hello">
                    Hello {name}!
                </div>
            </div>
        );
    }
}

export default HelloWorld;