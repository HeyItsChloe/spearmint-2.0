import React, { useContext } from 'react';
import styles from '../Context/Context.module.scss';
//import styles2 from '../AutoComplete/AutoCompleteMockData.module.scss';

import { deleteContexts, updateContexts } from '../../../context/testCaseActions';
import { Draggable } from 'react-beautiful-dnd';
//import AutoComplete from '../AutoComplete/AutoComplete';
//import AutoCompleteMockData from '../AutoComplete/AutoCompleteMockData';
import ToolTip from '../ToolTip/ToolTip';
//import { MockDataContext } from '../../../context/mockDataReducer';
const questionIcon = require('../../../assets/images/help-circle.png');
const closeIcon = require('../../../assets/images/close.png');
const dragIcon = require('../../../assets/images/drag-vertical.png');


const Context = ({ context, index, dispatchToTestCase }) => {

    const handleChangeContextFields = (e, field) => { 
        let updatedContext = { ...context };
        updatedContext[field] = e.target.value;
        dispatchToTestCase(updateContexts(updatedContext));
     };

    const handleClickDeleteContext = e => {
        dispatchToTestCase(deleteContexts(context.id))
    }


    return (
        <Draggable draggableId={context.id.toString()} index={index}>
        {provided => ( 
            <div  
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            id={styles.context}
            >

            <img src={closeIcon} id={styles.close} alt='close' onClick={handleClickDeleteContext} />

            <div id={styles.contextHeader}>
                <img src={dragIcon} alt='drag' />   
                <h3>Context</h3>
            </div>

            <div id={styles.queryFlexBox}>
                <div id={styles.querySelector}>
                <label htmlFor='queryVariant' className={styles.queryLabel}>
                    Query Selector
                </label>
                <div id={styles.dropdownFlex}>
                    {/* drop downs */}
                    <select
                    id='queryValue'
                    onChange={e => handleChangeContextFields(e, 'queryValue')}
                    >
                        <option value='' />
                        <option value='shows_default_value'>shows_default_value</option>
                        <option value='shows_value_from_provider'>shows_value_from_provider</option>
                        <option value='component_provides_context_value'>component_provides_context_value</option>
                        <option value='renders_providers_+_consumers_normally'>renders_providers_+_consumers_normally</option>
                    </select>
                    <span id={styles.hastooltip} role='tooltip'>
                        <img src={questionIcon} alt='help' />
                        <span id={styles.tooltip}>
                            <ToolTip toolTipType={context.queryVariant} />
                        </span>
                    </span>

                    <select
                    id='queryVariant'
                    onChange={e => handleChangeContextFields(e, 'queryVariant')}
                    >
                        <option value='' />
                        <option value='toHaveTextContext'>toHaveTextContext</option>
                        <option value='toBeInTheDocument'>toBeInTheDocument</option>
                        <option value='toBe'>toBe</option>
                    </select>
                    <span id={styles.hastooltip} role='tooltip'>
                        <img src={questionIcon} alt='help' />
                        <span id={styles.tooltip}>
                            <ToolTip toolTipType={context.queryVariant} />
                        </span>
                    </span>

                    <select
                    id='querySelector'
                    onChange={e => handleChangeContextFields(e, 'querySelector')}
                    >
                        <option value='' />
                        <option value='getByText'>getByText</option>
                    </select>
                    <span id={styles.hastooltip} role='tooltip'>
                        <img src={questionIcon} alt='help' />
                        <span id={styles.tooltip}>
                            <ToolTip toolTipType={context.queryVariant} />
                        </span>
                    </span>

                    {/* input boxes */}
                    <input 
                    id='consumerComponent'
                    onChange={e => handleChangeContextFields(e, 'consumerComponent')}
                    >
                    </input>
                    <span id={styles.hastooltip} role='tooltip'>
                        <img src={questionIcon} alt='help' />
                        <span id={styles.tooltip}>
                            <ToolTip toolTipType={context.querySelector} />
                        </span>
                    </span>

                    <input 
                    id='providerComponent'
                    onChange={e => handleChangeContextFields(e, 'providerComponent')}
                    >
                    </input>
                    <span id={styles.hastooltip} role='tooltip'>
                        <img src={questionIcon} alt='help' />
                        <span id={styles.tooltip}>
                            <ToolTip toolTipType={context.querySelector} />
                        </span>
                    </span>

                    <input 
                    id='context'
                    onChange={e => handleChangeContextFields(e, 'context')}
                    >
                    </input>
                    <span id={styles.hastooltip} role='tooltip'>
                        <img src={questionIcon} alt='help' />
                        <span id={styles.tooltip}>
                            <ToolTip toolTipType={context.querySelector} />
                        </span>
                    </span>

                    <input 
                    id='values'
                    onChange={e => handleChangeContextFields(e, 'values')}
                    >
                    </input>
                    <span id={styles.hastooltip} role='tooltip'>
                        <img src={questionIcon} alt='help' />
                        <span id={styles.tooltip}>
                            <ToolTip toolTipType={context.querySelector} />
                        </span>
                    </span>

                    <input 
                    id='textNode'
                    onChange={e => handleChangeContextFields(e, 'textNode')}
                    >
                    </input>
                    <span id={styles.hastooltip} role='tooltip'>
                        <img src={questionIcon} alt='help' />
                        <span id={styles.tooltip}>
                            <ToolTip toolTipType={context.querySelector} />
                        </span>
                    </span>
                </div>
                </div>

            </div>
            </div>
        )}
        </Draggable>
    ) 
}

export default Context;