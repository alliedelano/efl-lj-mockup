import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Introduction', pane: 'Introduction to course'},
    { menuItem: 'About the author', pane: 'Info about the author'}
]

const TabsForPage = () => <Tab panes={panes} renderActiveOnly={false} />

export default TabsForPage