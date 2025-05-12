import Image from "next/image";
import keyboardData from './keyboard.json';

type WordType = {
    word: string;
    phonetic: string;
    phonetics: PhoneticsType[];
    meanings: MeaningType[];
    license: LicenseType;
    sourceUrls: string[];
}

type LicenseType = {
    name: string;
    url: string;
}

type PhoneticsType = {
    text: string;
    audio: string;
    sourceUrl?: string;
    license?: LicenseType;
}

type DefinitionType = {
    definition: string;
    example?: string;
    synonyms: string[];
    antonyms: string[];
  };
  
type MeaningType = {
    partOfSpeech: string;
    definitions: DefinitionType[];
    synonyms: string[];
    antonyms: string[];
  };
    
function Definition({partOfSpeech, definitions, synonyms, antonyms} : MeaningType) {
    return (
        <div>
            <div className="font-color: white">
                <h2>{ partOfSpeech }</h2>
                <p>Meaning</p>
                <ul>
                    {definitions.map((def, i) => 
                        <li key={i}>
                            <p>{def.definition}</p>

                            {def.example && (
                                <p>{def.example}</p>
                            )}

                            {def.synonyms.length > 0 && (
                                <p><strong>Synonyms:</strong> {def.synonyms.join(', ')}</p>
                            )}

                            {def.antonyms.length > 0 && (
                                <p><strong>Synonyms:</strong> {def.antonyms.join(', ')}</p>
                            )}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default function Word({word, phonetic, phonetics, meanings, license, sourceUrls} : WordType) {
    return (
        <div>
            <h1>{word}</h1>
            <p>{phonetic}</p>
            <div>
                {meanings.map((meaning, i) =>
                    <Definition
                        key={i}
                        partOfSpeech = {meaning.partOfSpeech}
                        definitions = {meaning.definitions}
                        synonyms={meaning.synonyms}
                        antonyms={meaning.antonyms}
                    ></Definition>
                )}
            </div>
        </div>
    )
}