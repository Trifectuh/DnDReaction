import React, {Component} from 'react';
import VitalsRow from './VitalsRow';
import DnDTitle from '../../DnDTitle';
import {MessageBar} from 'office-ui-fabric-react';
class VitalsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var c = this.props.character;

        return (
            <div id="character-vitals-table">
                <DnDTitle Title="Vitals" />
                <MessageBar
                    isMultiline={ true }
                    onDismiss={ console.log('test') }
                    truncated={ true }
                    overflowButtonAriaLabel='Overflow'>

                <VitalsRow name="Armor Class"
                            value={c.ac} />
                <VitalsRow name="Max HP"
                            value={c.maxHP} />
                <VitalsRow name="Temp HP"
                            value={c.tempHP} />
                <VitalsRow name="Current HP"
                            value={c.curHP} />
                </MessageBar>
            </div>
        )
    }
}

export default VitalsTable;