import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { fetchChartableConsonants } from '../util/consonant_util';
import { fetchChartableVowels } from '../util/vowel_util';
import { generateWords } from '../util/word_gen_util';
import IpaChart from './ipa_chart/ipa_chart';
import isEmpty from 'lodash/isEmpty';

const methods = [
  "Plosive",
  "Nasal",
  "Trill",
  "Tap",
  "Fricative",
  "Lateral-Fricative",
  "Approximant",
  "Lateral-Approximant"
];
const points = [
  "Bilabial",
  "Labiodental",
  "Dental",
  "Alveolar",
  "Postalveolar",
  "Retroflex",
  "Palatal",
  "Velar",
  "Uvular",
  "Pharyngeal",
  "Glottal"
];
const openness = [
  "Close",
  "Near-Close",
  "Close-Mid",
  "Mid",
  "Open-Mid",
  "Near-Open",
  "Open"
];
const frontness = [
  "Front",
  "Near-Front",
  "Central",
  "Near-Back",
  "Back"
];

class WordGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allConsonants: {},
      allVowels: {},
      selectedConsonants: [],
      selectedVowels: []
    };
    this.toggleConsonant = this.toggleConsonant.bind(this);
    this.toggleVowel = this.toggleVowel.bind(this);
  }

  componenetWillMount() {
    console.log("mounting");
    fetchChartableConsonants().then(
      consonants => this.setState({allConsonants: consonants})
    );
    fetchChartableVowels().then(
      vowels => this.setState({allVowels: vowels})
    );
  }

  componentWillReceiveProps(newProps) {
    console.log("receiving props");
  }

  toggleConsonant(id) {
    let idx=this.state.selectedConsonants.indexOf(id);
    if (idx > -1) {
      this.setState({selectedConsonants: this.state.selectedConsonants.splice(idx, 1)});
    } else {
      this.setState({selectedConsonants: this.state.selectedConsonants.push(id)});
    }
  }

  toggleVowel(id) {
    let idx=this.state.selectedVowels.indexOf(id);
    if (idx > -1) {
      this.setState({selectedVowels: this.state.selectedVowels.splice(idx, 1)});
    } else {
      this.setState({selectedVowels: this.state.selectedVowels.push(id)});
    }
  }

  render() {
    console.log("word-gen");
    if (isEmpty(this.state.allConsonants) || isEmpty(this.state.allVowels)) {
      console.log("it's empty");
      return null;
     }
    return (
      <section className="word-gen-section">
        <div className="ipa-container">
          <div className="consonants">
            <h3>Pulmonic Consonants</h3>
            <IpaChart
              type="consonants"
              columns={points}
              rows={methods}
              phonemes={this.state.allConsonants}
              inventory={this.state.selectedConsonants}
              selectPhoneme={this.toggleConsonant}
              />
          </div>
          <div className="vowels">
            <h3>Vowels</h3>

          </div>
        </div>
      </section>
    );
  }
}

export default WordGenerator;
