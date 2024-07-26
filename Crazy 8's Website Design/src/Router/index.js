import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Wireframe1 from '../Components/Wireframe1';
import Wireframe1_1 from '../Components/Wireframe1_1';
import StateDefaultValueTypePlaceholder from '../Components/StateDefaultValueTypePlaceholder';
import Size16 from '../Components/Size16';
import Size16_1 from '../Components/Size16_1';
import VariantSubtleStateDefaultSizeMedium from '../Components/VariantSubtleStateDefaultSizeMedium';
import VariantPrimaryStateDefaultSizeMedium from '../Components/VariantPrimaryStateDefaultSizeMedium';
import AlignJustify from '../Components/AlignJustify';
import TextLink from '../Components/TextLink';
import FormLogIn from '../Components/FormLogIn';
import Notifications from '../Components/notifications';
import Size48 from '../Components/Size48';
import Mood from '../Components/mood';
import SelectedTrueStateHoveredLabelTrueBadgeNone from '../Components/SelectedTrueStateHoveredLabelTrueBadgeNone';
import Language from '../Components/language';
import SelectedFalseStateHoveredLabelTrueBadgeNone from '../Components/SelectedFalseStateHoveredLabelTrueBadgeNone';
import Schedule from '../Components/schedule';
import ConfigurationIconlabelSegments3 from '../Components/ConfigurationIconlabelSegments3';
import CurrentPrescriptionsRefillDate from '../Components/CurrentPrescriptionsRefillDate';
import Location_on from '../Components/location_on';
import ConfigurationTextonlyoflinesOnelineShowcloseaffordanceFalse from '../Components/ConfigurationTextonlyoflinesOnelineShowcloseaffordanceFalse';
import Size48_1 from '../Components/Size48_1';
import VerticalFullwidth from '../Components/VerticalFullwidth';
import Edit from '../Components/edit';
import StyleStandardStateEnabled from '../Components/StyleStandardStateEnabled';
import Arrow_drop_down from '../Components/arrow_drop_down';
import StateEnabled from '../Components/StateEnabled';
import Navigate_before from '../Components/navigate_before';
import Navigate_next from '../Components/navigate_next';
import TypeNullStateEnabled from '../Components/TypeNullStateEnabled';
import TypeDefaultStateEnabled from '../Components/TypeDefaultStateEnabled';
import TypeTodayStateEnabled from '../Components/TypeTodayStateEnabled';
import TypeSelectedStateEnabled from '../Components/TypeSelectedStateEnabled';
import StyleTextStateEnabledShowIconFalse from '../Components/StyleTextStateEnabledShowIconFalse';
import TypeDay from '../Components/TypeDay';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/wireframe1"><Wireframe1 /></Route>
				<Route exact path="/wireframe1_1"><Wireframe1_1 /></Route>
				<Route exact path="/statedefaultvaluetypeplaceholder"><StateDefaultValueTypePlaceholder /></Route>
				<Route exact path="/size16"><Size16 /></Route>
				<Route exact path="/size16_1"><Size16_1 /></Route>
				<Route exact path="/variantsubtlestatedefaultsizemedium"><VariantSubtleStateDefaultSizeMedium /></Route>
				<Route exact path="/variantprimarystatedefaultsizemedium"><VariantPrimaryStateDefaultSizeMedium /></Route>
				<Route exact path="/alignjustify"><AlignJustify /></Route>
				<Route exact path="/textlink"><TextLink /></Route>
				<Route exact path="/formlogin"><FormLogIn /></Route>
				<Route exact path="/notifications"><Notifications /></Route>
				<Route exact path="/size48"><Size48 /></Route>
				<Route exact path="/mood"><Mood /></Route>
				<Route exact path="/selectedtruestatehoveredlabeltruebadgenone"><SelectedTrueStateHoveredLabelTrueBadgeNone /></Route>
				<Route exact path="/language"><Language /></Route>
				<Route exact path="/selectedfalsestatehoveredlabeltruebadgenone"><SelectedFalseStateHoveredLabelTrueBadgeNone /></Route>
				<Route exact path="/schedule"><Schedule /></Route>
				<Route exact path="/configurationiconlabelsegments3"><ConfigurationIconlabelSegments3 /></Route>
				<Route exact path="/currentprescriptionsrefilldate"><CurrentPrescriptionsRefillDate /></Route>
				<Route exact path="/location_on"><Location_on /></Route>
				<Route exact path="/configurationtextonlyoflinesonelineshowcloseaffordancefalse"><ConfigurationTextonlyoflinesOnelineShowcloseaffordanceFalse /></Route>
				<Route exact path="/size48_1"><Size48_1 /></Route>
				<Route exact path="/verticalfullwidth"><VerticalFullwidth /></Route>
				<Route exact path="/edit"><Edit /></Route>
				<Route exact path="/stylestandardstateenabled"><StyleStandardStateEnabled /></Route>
				<Route exact path="/arrow_drop_down"><Arrow_drop_down /></Route>
				<Route exact path="/stateenabled"><StateEnabled /></Route>
				<Route exact path="/navigate_before"><Navigate_before /></Route>
				<Route exact path="/navigate_next"><Navigate_next /></Route>
				<Route exact path="/typenullstateenabled"><TypeNullStateEnabled /></Route>
				<Route exact path="/typedefaultstateenabled"><TypeDefaultStateEnabled /></Route>
				<Route exact path="/typetodaystateenabled"><TypeTodayStateEnabled /></Route>
				<Route exact path="/typeselectedstateenabled"><TypeSelectedStateEnabled /></Route>
				<Route exact path="/styletextstateenabledshowiconfalse"><StyleTextStateEnabledShowIconFalse /></Route>
				<Route exact path="/typeday"><TypeDay /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;