import React, {Component} from 'react';
import SrdParser from '../../srd-parser/srd-parser';
import DBController from '../../DBController.js';
import '../../../Stylesheets/Pages/SRDSection.css';
import '../../../Stylesheets/Pages/json-inspector.css';

const db = new DBController();

class SRDSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null
        };
        this.getSection = this.getSection.bind(this);
        this.renderSection = this.renderSection.bind(this);
    }

    componentDidMount() {
        this.getSection(this.props.section);
    }

    async getSection(section) {
        var sectionObject = await db.retrieveSRDSection(section);
        this.setState({content: sectionObject});
    }

    renderSection(object, section) {
        return (
            <div>
                {db.getAllSectionContent(object[section])}
            </div>
        );
    }

    render() {
        return (
            <SrdParser data={this.state.content}
                       isExpanded={(keypath, query) => true}
                //onClick={console.log.bind(console)}
                //interactiveLabel={InteractiveSelection}
            />
        )
    }

}

export default SRDSection;