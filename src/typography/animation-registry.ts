import type {AnimationTypographyConfiguration} from './animation-presets';
import {typography as administrativeTypography01} from '../animations/administrative-law/01/administrative-principles-compass/animation.meta';
import {typography as administrativeTypography02} from '../animations/administrative-law/02/administrative-subject-command/animation.meta';
import {typography as administrativeTypography03} from '../animations/administrative-law/03/civil-servant-career-file/animation.meta';
import {typography as administrativeTypography04} from '../animations/administrative-law/04/abstract-act-printworks/animation.meta';
import {typography as administrativeTypography05} from '../animations/administrative-law/05/concrete-act-laboratory/animation.meta';
import {typography as administrativeTypography06} from '../animations/administrative-law/06/license-transit-hub/animation.meta';
import {typography as administrativeTypography07} from '../animations/administrative-law/07/penalty-verdict-arena/animation.meta';
import {typography as administrativeTypography08} from '../animations/administrative-law/08/compulsion-safety-interlock/animation.meta';
import {typography as administrativeTypography09} from '../animations/administrative-law/09/transparency-optics-lab/animation.meta';
import {typography as administrativeTypography10} from '../animations/administrative-law/10/disclosure-case-desk/animation.meta';
import {typography as administrativeTypography11} from '../animations/administrative-law/11/misc-acts-showcase/animation.meta';
import {typography as administrativeTypography12} from '../animations/administrative-law/12/linkage-rail-switch/animation.meta';
import {typography as administrativeTypography15} from '../animations/administrative-law/15/litigation-procedure-press/animation.meta';
import {typography as administrativeTypography13} from '../animations/administrative-law/13/litigant-hierarchy-beacon/animation.meta';
import {typography as administrativeTypography14} from '../animations/administrative-law/14/acceptance-security-gate/animation.meta';
import {typography as administrativeTypography25} from '../animations/administrative-law/25/key-details-apothecary/animation.meta';
import {typography as typography97} from '../animations/criminal-procedure/07/evidence-exclusion-lattice/animation.meta';
import {typography as typography98} from '../animations/theoretical-law/01/concept-of-law-dispute/animation.meta';
import {typography as typography101} from '../animations/theoretical-law/01/marxist-law-essence/animation.meta';
import {typography as typography102} from '../animations/theoretical-law/01/features-of-law/animation.meta';
import {typography as typography103} from '../animations/theoretical-law/01/functions-of-law/animation.meta';
import {typography as typography104} from '../animations/theoretical-law/01/limitations-of-law/animation.meta';
import {typography as typography105} from '../animations/theoretical-law/01/value-conflict/animation.meta';
import {typography as typography106} from '../animations/theoretical-law/01/legal-rules/animation.meta';
import {typography as typography107} from '../animations/theoretical-law/01/legal-principles/animation.meta';
import {typography as typography108} from '../animations/theoretical-law/01/sources-of-law/animation.meta';
import {typography as typography99} from '../animations/criminal-procedure/01/procedure-structure-orrery/animation.meta';
import {typography as typography100} from '../animations/international-law/01/sources-of-international-law/animation.meta';
import {typography as typographyIl02} from '../animations/international-law/02/subjects-responsibility/animation.meta';
import {typography as typographyIl03} from '../animations/international-law/03/spatial-regimes/animation.meta';
import {typography as typographyIl04} from '../animations/international-law/04/individuals-regimes/animation.meta';
import {typography as typographyIl05} from '../animations/international-law/05/diplomatic-consular/animation.meta';
import {typography as typographyIl06} from '../animations/international-law/06/law-of-treaties/animation.meta';
import {typography as typographyIl07} from '../animations/international-law/07/dispute-settlement/animation.meta';
import {typography as typographyIl08} from '../animations/international-law/08/war-armed-conflict/animation.meta';
import {typography as typographyIl09} from '../animations/international-law/09/cross-border-disputes/animation.meta';
import {typography as typographyIl10} from '../animations/international-law/10/conflict-of-laws-rules/animation.meta';
import {typography as typographyIl11} from '../animations/international-law/11/applicable-law/animation.meta';
import {typography as typographyIl13} from '../animations/international-law/13/interregional-assistance/animation.meta';
import {typography as typographyIl18} from '../animations/international-law/18/wto/animation.meta';
import {typography as typographyIl15} from '../animations/international-law/15/goods-transport-insurance/animation.meta';
import {typography as typographyIl12} from '../animations/international-law/12/extraterritorial-assistance/animation.meta';
import {typography as typographyIl14} from '../animations/international-law/14/international-sale-of-goods/animation.meta';
import {typography as typographyIl16} from '../animations/international-law/16/international-trade-payment/animation.meta';
import {typography as typographyIl17} from '../animations/international-law/17/foreign-trade-administration/animation.meta';
import {typography as typographyIl19} from '../animations/international-law/19/other-regimes-international-economic-law/animation.meta';
import {typography as typographyCpOrgansRelay} from '../animations/criminal-procedure/03/organs-relay-map/animation.meta';
import {typography as typographyCpPleaCaliper} from '../animations/criminal-procedure/02/plea-leniency-caliper/animation.meta';
import {typography as typographyCpJurisdiction} from '../animations/criminal-procedure/04/jurisdiction-sluice-terrace/animation.meta';
import {typography as typographyCpRecusal} from '../animations/criminal-procedure/05/recusal-sentry-rotation/animation.meta';
import {typography as typographyCpPilot} from '../animations/criminal-procedure/06/defense-pilot-harbor/animation.meta';
import {typography as typographyCpBoiler} from '../animations/criminal-procedure/08/coercion-pressure-ladder/animation.meta';
import {typography as typographyCpViaduct} from '../animations/criminal-procedure/09/attached-suit-viaduct/animation.meta';
import {typography as typographyCpEscapement} from '../animations/criminal-procedure/10/period-escapement-works/animation.meta';
import {typography as typographyCpGatehouse} from '../animations/criminal-procedure/11/case-filing-gatehouse/animation.meta';
import {typography as typographyCpLoop} from '../animations/criminal-procedure/12/supplement-invest-loop/animation.meta';
import {typography as typographyCpTower} from '../animations/criminal-procedure/13/nonprosecution-signal-tower/animation.meta';
import {typography as typographyCpBench} from '../animations/criminal-procedure/14/trial-bench-composition/animation.meta';
import {typography as typographyCpStreet} from '../animations/criminal-procedure/15/first-instance-procession/animation.meta';
import {typography as typographyCpOneway} from '../animations/criminal-procedure/16/appeal-no-escalation-lock/animation.meta';
import {typography as typographyCpLoom} from '../animations/criminal-procedure/18/retrial-rewind-loom/animation.meta';
import {typography as typographyCpDispatch} from '../animations/criminal-procedure/19/execution-dispatch-board/animation.meta';
import {typography as typographyCpGreenhouse} from '../animations/criminal-procedure/20/juvenile-observatory-greenhouse/animation.meta';
import {typography as typographyCpSummit} from '../animations/criminal-procedure/17/death-review-summit/animation.meta';
import {typography as typographyCpPavilion} from '../animations/criminal-procedure/21/reconciliation-scale-pavilion/animation.meta';
import {typography as typographyCpCourier} from '../animations/criminal-procedure/22/onyx-courier/animation.meta';
import {typography as typographyCpVault} from '../animations/criminal-procedure/23/asset-seal-vault/animation.meta';
import {typography as typographyCpCareGate} from '../animations/criminal-procedure/24/mandatory-care-gate/animation.meta';
import {typography as typographyCpRelay} from '../animations/criminal-procedure/25/dual-track-relay/animation.meta';
import {typography as typography0} from '../animations/civil-procedure/01/dispute-resolution/animation.meta';
import {typography as typography1} from '../animations/civil-procedure/01/law-attributes/animation.meta';
import {typography as typography2} from '../animations/civil-procedure/01/trial-procedure/animation.meta';
import {typography as typography3} from '../animations/civil-procedure/02/counterclaim-vs-defense/animation.meta';
import {typography as typography4} from '../animations/civil-procedure/02/lawsuit-elements/animation.meta';
import {typography as typography5} from '../animations/civil-procedure/03/basic-principles-triangle/animation.meta';
import {typography as typography6} from '../animations/civil-procedure/03/recusal-procedure-path/animation.meta';
import {typography as typography7} from '../animations/civil-procedure/03/trial-organization-path/animation.meta';
import {typography as typography8} from '../animations/civil-procedure/04/legal-jurisdiction/animation.meta';
import {typography as typography9} from '../animations/civil-procedure/04/territorial-jurisdiction/animation.meta';
import {typography as typography10} from '../animations/civil-procedure/05/guarantee-party/animation.meta';
import {typography as typography11} from '../animations/civil-procedure/05/party-capacity/animation.meta';
import {typography as typography12} from '../animations/civil-procedure/05/party-change/animation.meta';
import {typography as typography13} from '../animations/civil-procedure/05/proper-party/animation.meta';
import {typography as typography14} from '../animations/civil-procedure/06/joint-litigation/animation.meta';
import {typography as typography15} from '../animations/civil-procedure/06/representative-litigation/animation.meta';
import {typography as typography16} from '../animations/civil-procedure/07/third-party-revocation/animation.meta';
import {typography as typography17} from '../animations/civil-procedure/07/third-party-types/animation.meta';
import {typography as typography18} from '../animations/civil-procedure/08/delegated-agent-badge/animation.meta';
import {typography as typography19} from '../animations/civil-procedure/08/delegated-agent-circuit/animation.meta';
import {typography as typography20} from '../animations/civil-procedure/08/delegated-agent-stage/animation.meta';
import {typography as typography21} from '../animations/civil-procedure/08/delegated-agent/animation.meta';
import {typography as typography22} from '../animations/civil-procedure/08/statutory-agent-badge/animation.meta';
import {typography as typography23} from '../animations/civil-procedure/08/statutory-agent-circuit/animation.meta';
import {typography as typography24} from '../animations/civil-procedure/08/statutory-agent-stage/animation.meta';
import {typography as typography25} from '../animations/civil-procedure/08/statutory-agent/animation.meta';
import {typography as typography26} from '../animations/civil-procedure/09/admission-court-record/animation.meta';
import {typography as typography27} from '../animations/civil-procedure/09/burden-of-proof-steps/animation.meta';
import {typography as typography62} from '../animations/civil-procedure/09/burden-of-proof-caveats/animation.meta';
import {typography as typography28} from '../animations/civil-procedure/10/appraisal-opinion/animation.meta';
import {typography as typography29} from '../animations/civil-procedure/10/documentary-evidence-rules/animation.meta';
import {typography as typography73} from '../animations/civil-procedure/10/foreign-document-authentication/animation.meta';
import {typography as typography30} from '../animations/civil-procedure/10/evidence-classification/animation.meta';
import {typography as typography31} from '../animations/civil-procedure/10/inspection-record/animation.meta';
import {typography as typography32} from '../animations/civil-procedure/10/party-statements/animation.meta';
import {typography as typography33} from '../animations/civil-procedure/10/professional-evidence-roles/animation.meta';
import {typography as typography34} from '../animations/civil-procedure/10/statutory-evidence-types/animation.meta';
import {typography as typography35} from '../animations/civil-procedure/10/witness-testimony/animation.meta';
import {typography as typography36} from '../animations/civil-procedure/11/evidence-preservation/animation.meta';
import {typography as typography37} from '../animations/civil-procedure/11/evidence-review/animation.meta';
import {typography as typography38} from '../animations/civil-procedure/11/proof-filing-investigation/animation.meta';
import {typography as typography39} from '../animations/civil-procedure/11/surprise-judgment-focus/animation.meta';
import {typography as typography63} from '../animations/civil-procedure/12/pre-suit-preservation-transfer/animation.meta';
import {typography as typography64} from '../animations/civil-procedure/12/preservation-asset-measures/animation.meta';
import {typography as typography65} from '../animations/civil-procedure/12/preservation-remedy-switchboard/animation.meta';
import {typography as typography66} from '../animations/civil-procedure/12/preservation-stage-map/animation.meta';
import {typography as typography67} from '../animations/civil-procedure/12/provisional-execution-gates/animation.meta';
import {typography as typography68} from '../animations/civil-procedure/12/provisional-execution-resolution/animation.meta';
import {typography as typography71} from '../animations/civil-procedure/12/behavior-preservation/animation.meta';
import {typography as typography69} from '../animations/civil-procedure/14/period-calculation/animation.meta';
import {typography as typography70} from '../animations/civil-procedure/14/service-delivery-network/animation.meta';
import {typography as typography72} from '../animations/civil-procedure/15/mediation-settlement-path/animation.meta';
import {typography as typography74} from '../animations/civil-procedure/16/ordinary-procedure-control-map/animation.meta';
import {typography as typography79} from '../animations/civil-procedure/16/party-death-procedure-effects/animation.meta';
import {typography as typography75} from '../animations/civil-procedure/17/summary-procedure-switchyard/animation.meta';
import {typography as typography76} from '../animations/civil-procedure/18/public-interest-litigation-network/animation.meta';
import {typography as typography77} from '../animations/civil-procedure/19/third-party-revocation-remedy-map/animation.meta';
import {typography as typography78} from '../animations/civil-procedure/20/appeal-review-decision-map/animation.meta';
import {typography as typography80} from '../animations/civil-procedure/20/retrial-supervision-control-map/animation.meta';
import {typography as typography92} from '../animations/civil-procedure/20/instance-claim-counterclaim-map/animation.meta';
import {typography as typography81} from '../animations/civil-procedure/21/special-procedure-remedy-map/animation.meta';
import {typography as typography82} from '../animations/civil-procedure/22/payment-order-gate/animation.meta';
import {typography as typography83} from '../animations/civil-procedure/23/public-notice-cancellation-path/animation.meta';
import {typography as typography84} from '../animations/civil-procedure/24/enforcement-control-network/animation.meta';
import {typography as typography85} from '../animations/civil-procedure/25/cross-border-procedure-compass/animation.meta';
import {typography as typography86} from '../animations/civil-procedure/26/arbitration-validity-route/animation.meta';
import {typography as typography87} from '../animations/civil-procedure/27/contract-issue-reframing/animation.meta';
import {typography as typography88} from '../animations/civil-procedure/28/reciprocal-performance-judgments/animation.meta';
import {typography as typography89} from '../animations/civil-procedure/29/subrogation-litigation-network/animation.meta';
import {typography as typography90} from '../animations/civil-procedure/30/revocation-action-execution-chain/animation.meta';
import {typography as typography91} from '../animations/civil-procedure/31/termination-withdrawal-timeline/animation.meta';
import {typography as typography93} from '../animations/civil-procedure/32/penalty-adjustment-procedure/animation.meta';
import {typography as typography94} from '../animations/civil-law/contracts/contract-book-atlas/animation.meta';
import {typography as typographySpf} from '../animations/civil-law/14/security-publicity-fate/animation.meta';
import {typography as typographySpp} from '../animations/civil-law/01/six-principles-pillars/animation.meta';
import {typography as typographyAutoApplicationOfLaw} from '../animations/theoretical-law/01/application-of-law/animation.meta';
import {typography as typographyLh} from '../animations/theoretical-law/01/legal-loopholes/animation.meta';
import {typography as typographyAutoBankruptcyReorganization} from '../animations/commercial-law/12/bankruptcy-reorganization/animation.meta';
import {typography as typographyAutoBankruptcyLiquidation} from '../animations/commercial-law/12/bankruptcy-liquidation/animation.meta';
import {typography as typographyAutoRecoveryRight} from '../animations/commercial-law/11/recovery-right/animation.meta';
import {typography as typographyAutoReclaimRight} from '../animations/commercial-law/11/reclaim-right/animation.meta';
import {typography as typographyAutoDebtorPropertyScope} from '../animations/commercial-law/11/debtor-property-scope/animation.meta';
import {typography as typographyAutoBankruptcyRevocationRight} from '../animations/commercial-law/11/bankruptcy-revocation-right/animation.meta';
import {typography as typographyAutoCreditorsMeeting} from '../animations/commercial-law/10/creditors-meeting/animation.meta';
import {typography as typographyAutoClaimFiling} from '../animations/commercial-law/10/claim-filing/animation.meta';
import {typography as typographyAutoBankruptcyGrounds} from '../animations/commercial-law/09/bankruptcy-grounds/animation.meta';
import {typography as typographyAutoBankruptcyCosts} from '../animations/commercial-law/09/bankruptcy-costs/animation.meta';
import {typography as typographyAutoBankruptcyApplication} from '../animations/commercial-law/09/bankruptcy-application/animation.meta';
import {typography as typographyAutoBankruptcyAdministrator} from '../animations/commercial-law/09/bankruptcy-administrator/animation.meta';
import {typography as typographyAutoCompanyLiquidation} from '../animations/commercial-law/08/company-liquidation/animation.meta';
import {typography as typographyAutoCompanyDissolution} from '../animations/commercial-law/08/company-dissolution/animation.meta';
import {typography as typographyAutoShareIssuanceTransfer} from '../animations/commercial-law/07/share-issuance-transfer/animation.meta';
import {typography as typographyAutoLlcEquityTransfer} from '../animations/commercial-law/07/llc-equity-transfer/animation.meta';
import {typography as typographyAutoCompanyRestructuring} from '../animations/commercial-law/07/company-restructuring/animation.meta';
import {typography as typographyAutoResolutionValidity} from '../animations/commercial-law/06/resolution-validity/animation.meta';
import {typography as typographyAutoCorporateOrgans} from '../animations/commercial-law/06/corporate-organs/animation.meta';
import {typography as typographyAutoShareholderRepresentativeAction} from '../animations/commercial-law/05/shareholder-representative-action/animation.meta';
import {typography as typographyAutoDirectorDuties} from '../animations/commercial-law/05/director-duties/animation.meta';
import {typography as typographyAutoInformationRight} from '../animations/commercial-law/04/information-right/animation.meta';
import {typography as typographyAutoRightsShieldArmory} from '../animations/civil-law/01/rights-shield-armory/animation.meta';
import {typography as typographyAutoCapacityGuardianshipRegistry} from '../animations/civil-law/02/capacity-guardianship-registry/animation.meta';
import {typography as typographyAutoAbsenceProclamationHall} from '../animations/civil-law/02/absence-proclamation-hall/animation.meta';
import {typography as typographyAutoRepresentationAuthorityDesk} from '../animations/civil-law/02/representation-authority-desk/animation.meta';
import {typography as typographyAutoLegalPersonIndependenceHall} from '../animations/civil-law/02/legal-person-independence-hall/animation.meta';
import {typography as typographyAutoIntentionExpressionHall} from '../animations/civil-law/03/intention-expression-hall/animation.meta';
import {typography as typographyAutoEffectivenessActivationHall} from '../animations/civil-law/03/effectiveness-activation-hall/animation.meta';
import {typography as typographyAutoDefectRemedyVerdictHall} from '../animations/civil-law/03/defect-remedy-verdict-hall/animation.meta';
import {typography as typographyAutoAgencyAuthorityHall} from '../animations/civil-law/04/agency-authority-hall/animation.meta';
import {typography as typographyAutoLimitationClockHall} from '../animations/civil-law/04/limitation-clock-hall/animation.meta';
import {typography as typographyAutoNegotiorumManagementHall} from '../animations/civil-law/05/negotiorum-management-hall/animation.meta';
import {typography as typographyAutoUnjustEnrichmentHall} from '../animations/civil-law/05/unjust-enrichment-hall/animation.meta';
import {typography as typographyAutoPropertySystemHall} from '../animations/civil-law/06/property-system-hall/animation.meta';
import {typography as typographyAutoTransferModeHall} from '../animations/civil-law/06/transfer-mode-hall/animation.meta';
import {typography as typographyAutoDeliveryRegistryHall} from '../animations/civil-law/06/delivery-registry-hall/animation.meta';
import {typography as typographyAutoPreRegistrationHall} from '../animations/civil-law/06/pre-registration-hall/animation.meta';
import {typography as typographyAutoGoodFaithAcquisitionHall} from '../animations/civil-law/07/good-faith-acquisition-hall/animation.meta';
import {typography as typographyAutoAdoptionDossierRegistry} from '../animations/civil-law/21/adoption-dossier-registry/animation.meta';
import {typography as typographyAutoDividendRight} from '../animations/commercial-law/04/dividend-right/animation.meta';
import {typography as typographyAutoShareholderQualification} from '../animations/commercial-law/03/shareholder-qualification/animation.meta';
import {typography as typographyAutoNominalShareholder} from '../animations/commercial-law/03/nominal-shareholder/animation.meta';
import {typography as typographyAutoShareholderContribution} from '../animations/commercial-law/02/shareholder-contribution/animation.meta';
import {typography as typographyAutoPromoter} from '../animations/commercial-law/02/promoter/animation.meta';
import {typography as typographyAutoCompanyIncorporation} from '../animations/commercial-law/02/company-incorporation/animation.meta';
import {typography as typographyAutoCompanyPersonality} from '../animations/commercial-law/01/company-personality/animation.meta';
import {typography as typographyAutoCompanyClassification} from '../animations/commercial-law/01/company-classification/animation.meta';
import {typography as typographyAutoCompanyCapacity} from '../animations/commercial-law/01/company-capacity/animation.meta';
import {typography as typographyAutoEvidenceVitrineMuseum} from '../animations/administrative-law/16/evidence-vitrine-museum/animation.meta';
import {typography as typographyAutoApplicationSilkLoom} from '../animations/administrative-law/17/application-silk-loom/animation.meta';
import {typography as typographyAutoJudgmentExecutionClockwork} from '../animations/administrative-law/18/judgment-execution-clockwork/animation.meta';
import {typography as typographyAutoReviewRelayNetwork} from '../animations/administrative-law/19/review-relay-network/animation.meta';
import {typography as typographyAutoContractTwinMastHarbor} from '../animations/administrative-law/22/contract-twin-mast-harbor/animation.meta';
import {typography as typographyAutoSocialSystem} from '../animations/theoretical-law/01/social-system/animation.meta';
import {typography as typographyAutoRepublicConstitutionHistory} from '../animations/theoretical-law/03/republic-constitution-history/animation.meta';
import {typography as typographyAutoReckoningAbacusDesk} from '../animations/administrative-law/24/reckoning-abacus-desk/animation.meta';
import {typography as typographyAutoBambooScrollRestoration} from '../animations/administrative-law/23/bamboo-scroll-restoration/animation.meta';
import {typography as typographyAutoLighthouseWatchNetwork} from '../animations/administrative-law/20/lighthouse-watch-network/animation.meta';
import {typography as typographyAutoDisclosureDarkroomStudio} from '../animations/administrative-law/21/disclosure-darkroom-studio/animation.meta';
import {typography as typographyAutoLegalReasoning} from '../animations/theoretical-law/01/legal-reasoning/animation.meta';
import {typography as typographyFam} from '../animations/theoretical-law/01/legal-families/animation.meta';
import {typography as typographyMod} from '../animations/theoretical-law/01/legal-modernization/animation.meta';
import {typography as typographyLm} from '../animations/theoretical-law/01/law-and-morality/animation.meta';
import {typography as typographyHr} from '../animations/theoretical-law/01/law-and-human-rights/animation.meta';
import {typography as typographyCsg} from '../animations/civil-procedure/12/compulsory-summons-gate/animation.meta';
import {typography as typography109} from '../animations/theoretical-law/01/sources-of-law/animation.meta';
import {typography as typography96} from '../animations/theoretical-law/17/legal-interpretation/animation.meta';
import {typography as typographyTds} from '../animations/theoretical-law/01/legal-departments-system/animation.meta';
import {typography as typographyLv} from '../animations/theoretical-law/01/legal-validity/animation.meta';
import {typography as typographyLr} from '../animations/theoretical-law/01/legal-relations/animation.meta';
import {typography as typographyLc} from '../animations/theoretical-law/01/liability-concurrence/animation.meta';
import {typography as typographyJv} from '../animations/theoretical-law/01/judicial-vs-administrative/animation.meta';
import {typography as typography40} from '../animations/criminal/19/card-selling-funds-viewpoint/animation.meta';
import {typography as typography41} from '../animations/criminal/19/occupational-embezzlement-flowchart/animation.meta';
import {typography as typography42} from '../animations/criminal/19/property-interests-keypoints/animation.meta';
import {typography as typography43} from '../animations/criminal/19/theft-mistake-analysis/animation.meta';
import {typography as typography44} from '../animations/criminal/22/fight-defense-diagram/animation.meta';
import {typography as typography45} from '../animations/criminal/22/high-altitude-throwing-diagram/animation.meta';
import {typography as typography46} from '../animations/criminal/23/influence-intermediary/animation.meta';
import {typography as typography47} from '../animations/criminal/23/official-intermediary/animation.meta';
import {typography as typographyCt11} from '../animations/criminal/11/commencement-threshold-map/animation.meta';
import {typography as typographyAutoPenalFrontierRange} from '../animations/criminal/01/penal-frontier-range/animation.meta';
import {typography as typographyAutoCrimeConstitutionAtlas} from '../animations/criminal/02/crime-constitution-atlas/animation.meta';
import {typography as typographyAutoInterestRightsBalance} from '../animations/criminal/03/interest-rights-balance/animation.meta';
import {typography as typographyAutoIdentityUnitSubject} from '../animations/criminal/04/identity-unit-subject/animation.meta';
import {typography as typographyAutoConductOmissionGates} from '../animations/criminal/05/conduct-omission-gates/animation.meta';
import {typography as typographyAutoHarmResultAggravation} from '../animations/criminal/06/harm-result-aggravation/animation.meta';
import {typography as typographyAutoCausationAttributionFlow} from '../animations/criminal/07/causation-attribution-flow/animation.meta';
import {typography as typographyAutoIntentMensReaMap} from '../animations/criminal/08/intent-mens-rea-map/animation.meta';
import {typography as typographyAutoJustificationDefenseNecessity} from '../animations/criminal/09/justification-defense-necessity/animation.meta';
import {typography as typographyAutoCulpabilityRingAssay} from '../animations/criminal/10/culpability-ring-assay/animation.meta';
import {typography as typographyAutoCrimeNumberReckoning} from '../animations/criminal/13/crime-number-reckoning/animation.meta';
import {typography as typographyAutoPenaltyScaleOffice} from '../animations/criminal/14/penalty-scale-office/animation.meta';
import {typography as typographyAutoSentencingMeasureHall} from '../animations/criminal/15/sentencing-measure-hall/animation.meta';
import {typography as typographyAutoComplicityPrinciplesJointPrincipal} from '../animations/criminal/12/complicity-principles-joint-principal/animation.meta';
import {typography as typographyAutoIndirectPerpetratorDominion} from '../animations/criminal/12/indirect-perpetrator-dominion/animation.meta';
import {typography as typographyAutoInstigatorAbettorRoles} from '../animations/criminal/12/instigator-abettor-roles/animation.meta';
import {typography as typographyAutoExecutionExpiryStation} from '../animations/criminal/16/execution-expiry-station/animation.meta';
import {typography as typographyAutoClauseAtlasNoticeFiction} from '../animations/criminal/17/clause-atlas-notice-fiction/animation.meta';
import {typography as typographyAutoBodyCrimePurposeMap} from '../animations/criminal/18/body-crime-purpose-map/animation.meta';
import {typography as typographyAutoPropertyCrimeLedger} from '../animations/criminal/19/property-crime-ledger/animation.meta';
import {typography as typographyAutoPublicSafetyAlertBoard} from '../animations/criminal/20/public-safety-alert-board/animation.meta';
import {typography as typographyAutoEconCrimeFiling} from '../animations/criminal/21/econ-crime-filing/animation.meta';
import {typography as typographyAutoDetentionClauseLadder} from '../animations/criminal/18/detention-clause-ladder/animation.meta';
import {typography as typographyAutoDerelictionDutyDesk} from '../animations/criminal/24/dereliction-duty-desk/animation.meta';
import {typography as typographyAutoStateSecurityWireRoom} from '../animations/criminal/25/state-security-wire-room/animation.meta';
import {typography as typographyAutoPowerMoneyExchange} from '../animations/criminal/23/power-money-exchange/animation.meta';
import {typography as typographyAutoPublicOrderWatchTower} from '../animations/criminal/22/public-order-watch-tower/animation.meta';
import {typography as typographyLl} from '../animations/theoretical-law/01/legislation-law/animation.meta';
import {typography as typographyFc} from '../animations/theoretical-law/01/features-of-constitution/animation.meta';
import {typography as typographyCo} from '../animations/theoretical-law/01/creation-of-constitution/animation.meta';
import {typography as typographyNdl} from '../animations/theoretical-law/03/new-democratic-legal-system/animation.meta';
import {typography as typographyLhf} from '../animations/theoretical-law/03/legal-history-firsts/animation.meta';
import {typography as typographyGa} from '../animations/theoretical-law/01/grassroots-autonomy/animation.meta';
import {typography as typographyCfr} from '../animations/theoretical-law/01/citizen-fundamental-rights/animation.meta';
import {typography as typographyNsc} from '../animations/theoretical-law/01/npc-standing-committee/animation.meta';
import {typography as typographyNh} from '../animations/theoretical-law/01/national-honors/animation.meta';
import {typography as typographyScouncil} from '../animations/theoretical-law/01/state-council/animation.meta';
import {typography as typographyEmd} from '../animations/theoretical-law/01/emergency-decisions/animation.meta';
import {typography as typographyCmc} from '../animations/theoretical-law/01/central-military-commission/animation.meta';
import {typography as typographySup} from '../animations/theoretical-law/01/supervisory-organs/animation.meta';
import {typography as typographyLpc} from '../animations/theoretical-law/01/local-people-congresses/animation.meta';
import {typography as typographyConst} from '../animations/theoretical-law/01/constitutional-supervision/animation.meta';
import {typography as typographyJso} from '../animations/theoretical-law/04/judicial-system-overview/animation.meta';
import {typography as typographyJc} from '../animations/theoretical-law/04/judicial-characteristics/animation.meta';
import {typography as typographyJf} from '../animations/theoretical-law/04/judicial-functions/animation.meta';
import {typography as typographyJfe} from '../animations/theoretical-law/04/judicial-fairness-efficiency/animation.meta';
import {typography as typographyJi} from '../animations/theoretical-law/04/judicial-independence/animation.meta';
import {typography as typographyLpe} from '../animations/theoretical-law/04/legal-professional-ethics/animation.meta';
import {typography as typographyJq} from '../animations/theoretical-law/04/judge-qualifications/animation.meta';
import {typography as typographyJm} from '../animations/theoretical-law/04/judge-management/animation.meta';
import {typography as typographyJe} from '../animations/theoretical-law/04/judge-ethics/animation.meta';
import {typography as typographyJl} from '../animations/theoretical-law/04/judge-liability/animation.meta';
import {typography as typographyPa} from '../animations/theoretical-law/04/people-assessors/animation.meta';
import {typography as typographyPp} from '../animations/theoretical-law/04/procuratorial-principles/animation.meta';
import {typography as typographyPl} from '../animations/theoretical-law/04/procuratorate-leadership/animation.meta';
import {typography as typographyPe} from '../animations/theoretical-law/04/procurator-ethics/animation.meta';
import {typography as typographyJpd} from '../animations/theoretical-law/04/judge-procurator-discipline/animation.meta';
import {typography as typographyLs} from '../animations/theoretical-law/04/lawyer-system/animation.meta';
import {typography as typographyLfe} from '../animations/theoretical-law/04/law-firm-establishment/animation.meta';
import {typography as typographyLft} from '../animations/theoretical-law/04/law-firm-types/animation.meta';
import {typography as typographyCar} from '../animations/theoretical-law/04/client-attorney-relations/animation.meta';
import {typography as typographyLp} from '../animations/theoretical-law/04/lawyer-promotion/animation.meta';
import {typography as typographyLf} from '../animations/theoretical-law/04/lawyer-fees/animation.meta';
import {typography as typographyLpr} from '../animations/theoretical-law/04/lawyer-peer-relations/animation.meta';
import {typography as typographyLa} from '../animations/theoretical-law/04/legal-aid/animation.meta';
import {typography as typographyNq} from '../animations/theoretical-law/04/notary-qualifications/animation.meta';
import {typography as typographyNo} from '../animations/theoretical-law/04/notary-organs/animation.meta';
import {typography as typographyNr} from '../animations/theoretical-law/04/notary-refusal/animation.meta';
import {typography as typographyNpr} from '../animations/theoretical-law/04/notary-procedure/animation.meta';
import {typography as typographyNrd} from '../animations/theoretical-law/04/notary-rights-duties/animation.meta';
import {typography as typographyNre} from '../animations/theoretical-law/04/notary-remedies/animation.meta';
import {typography as typographyNel} from '../animations/theoretical-law/04/notary-ethics-liability/animation.meta';
import {typography as typographyXrf} from '../animations/theoretical-law/05/xi-rule-of-law-formation/animation.meta';
import {typography as typographyXrc} from '../animations/theoretical-law/05/xi-rule-of-law-core/animation.meta';
import {typography as typographyXrp} from '../animations/theoretical-law/05/xi-rule-of-law-practice/animation.meta';
import {typography as typographyCc} from '../animations/theoretical-law/01/constitution-classification/animation.meta';
import {typography as typographyCdv} from '../animations/theoretical-law/01/constitution-development/animation.meta';
import {typography as typographyCp} from '../animations/theoretical-law/01/constitution-principles/animation.meta';
import {typography as typographyCss} from '../animations/theoretical-law/01/constitution-sources-structure/animation.meta';
import {typography as typographySs} from '../animations/theoretical-law/01/state-system/animation.meta';
import {typography as typographyEl} from '../animations/theoretical-law/01/election-law/animation.meta';
import {typography as typographySsd} from '../animations/theoretical-law/01/state-structure-divisions/animation.meta';
import {typography as typographyRea} from '../animations/theoretical-law/01/regional-ethnic-autonomy/animation.meta';
import {typography as typographySar} from '../animations/theoretical-law/01/special-administrative-regions/animation.meta';
import {typography as typographyZhou} from '../animations/theoretical-law/03/zhou-legal-history/animation.meta';
import {typography as typographySaw} from '../animations/theoretical-law/03/spring-autumn-warring-states/animation.meta';
import {typography as typographyHan} from '../animations/theoretical-law/03/han-confucianization/animation.meta';
import {typography as typographyWjn} from '../animations/theoretical-law/03/wei-jin-nanbei-chaodai/animation.meta';
import {typography as typographyTcl} from '../animations/theoretical-law/03/tang-code-liuzang-liusha/animation.meta';
import {typography as typographyQde} from '../animations/theoretical-law/03/qing-dynasty-examples/animation.meta';
import {typography as typographyEs} from '../animations/theoretical-law/01/economic-system/animation.meta';
import {typography as typography48} from '../animations/demo/demo-archival-dossier/animation.meta';
import {typography as typography49} from '../animations/demo/demo-constructivist-geometry/animation.meta';
import {typography as typography50} from '../animations/demo/demo-courtroom-blueprint/animation.meta';
import {typography as typography51} from '../animations/demo/demo-decision-tree/animation.meta';
import {typography as typography52} from '../animations/demo/demo-evidence-board/animation.meta';
import {typography as typography53} from '../animations/demo/demo-ink-annotation/animation.meta';
import {typography as typography54} from '../animations/demo/demo-isometric-mechanism/animation.meta';
import {typography as typography55} from '../animations/demo/demo-kinetic-typography/animation.meta';
import {typography as typography56} from '../animations/demo/demo-newspaper-editorial/animation.meta';
import {typography as typography57} from '../animations/demo/demo-rights-matrix/animation.meta';
import {typography as typography58} from '../animations/demo/demo-split-screen-comparison/animation.meta';
import {typography as typography59} from '../animations/demo/demo-statute-commentary/animation.meta';
import {typography as typography60} from '../animations/demo/demo-timeline-chronicle/animation.meta';
import {typography as typography61} from '../animations/demo/demo-transit-map/animation.meta';

const ANIMATION_TYPOGRAPHY_CONFIGURATIONS: Readonly<Record<string, AnimationTypographyConfiguration>> = {
  'administrative-principles-compass': {metadata: administrativeTypography01, scope: {animationId: 'administrative-principles-compass', subject: 'administrative-law', topic: '01'}},
  'administrative-subject-command': {metadata: administrativeTypography02, scope: {animationId: 'administrative-subject-command', subject: 'administrative-law', topic: '02'}},
  'civil-servant-career-file': {metadata: administrativeTypography03, scope: {animationId: 'civil-servant-career-file', subject: 'administrative-law', topic: '03'}},
  'abstract-act-printworks': {metadata: administrativeTypography04, scope: {animationId: 'abstract-act-printworks', subject: 'administrative-law', topic: '04'}},
  'concrete-act-laboratory': {metadata: administrativeTypography05, scope: {animationId: 'concrete-act-laboratory', subject: 'administrative-law', topic: '05'}},
  'license-transit-hub': {metadata: administrativeTypography06, scope: {animationId: 'license-transit-hub', subject: 'administrative-law', topic: '06'}},
  'penalty-verdict-arena': {metadata: administrativeTypography07, scope: {animationId: 'penalty-verdict-arena', subject: 'administrative-law', topic: '07'}},
  'compulsion-safety-interlock': {metadata: administrativeTypography08, scope: {animationId: 'compulsion-safety-interlock', subject: 'administrative-law', topic: '08'}},
  'transparency-optics-lab': {metadata: administrativeTypography09, scope: {animationId: 'transparency-optics-lab', subject: 'administrative-law', topic: '09'}},
  'disclosure-case-desk': {metadata: administrativeTypography10, scope: {animationId: 'disclosure-case-desk', subject: 'administrative-law', topic: '10'}},
  'misc-acts-showcase': {metadata: administrativeTypography11, scope: {animationId: 'misc-acts-showcase', subject: 'administrative-law', topic: '11'}},
  'linkage-rail-switch': {metadata: administrativeTypography12, scope: {animationId: 'linkage-rail-switch', subject: 'administrative-law', topic: '12'}},
  'litigation-procedure-press': {metadata: administrativeTypography15, scope: {animationId: 'litigation-procedure-press', subject: 'administrative-law', topic: '15'}},
  'litigant-hierarchy-beacon': {metadata: administrativeTypography13, scope: {animationId: 'litigant-hierarchy-beacon', subject: 'administrative-law', topic: '13'}},
  'acceptance-security-gate': {metadata: administrativeTypography14, scope: {animationId: 'acceptance-security-gate', subject: 'administrative-law', topic: '14'}},
  'key-details-apothecary': {metadata: administrativeTypography25, scope: {animationId: 'key-details-apothecary', subject: 'administrative-law', topic: '25'}},
  'dispute-resolution': {metadata: typography0, scope: {animationId: 'dispute-resolution', subject: 'civil-procedure', topic: '01'}},
  'law-attributes': {metadata: typography1, scope: {animationId: 'law-attributes', subject: 'civil-procedure', topic: '01'}},
  'trial-procedure': {metadata: typography2, scope: {animationId: 'trial-procedure', subject: 'civil-procedure', topic: '01'}},
  'counterclaim-vs-defense': {metadata: typography3, scope: {animationId: 'counterclaim-vs-defense', subject: 'civil-procedure', topic: '02'}},
  'lawsuit-elements': {metadata: typography4, scope: {animationId: 'lawsuit-elements', subject: 'civil-procedure', topic: '02'}},
  'basic-principles-triangle': {metadata: typography5, scope: {animationId: 'basic-principles-triangle', subject: 'civil-procedure', topic: '03'}},
  'recusal-procedure-path': {metadata: typography6, scope: {animationId: 'recusal-procedure-path', subject: 'civil-procedure', topic: '03'}},
  'trial-organization-path': {metadata: typography7, scope: {animationId: 'trial-organization-path', subject: 'civil-procedure', topic: '03'}},
  'legal-jurisdiction': {metadata: typography8, scope: {animationId: 'legal-jurisdiction', subject: 'civil-procedure', topic: '04'}},
  'territorial-jurisdiction': {metadata: typography9, scope: {animationId: 'territorial-jurisdiction', subject: 'civil-procedure', topic: '04'}},
  'guarantee-party': {metadata: typography10, scope: {animationId: 'guarantee-party', subject: 'civil-procedure', topic: '05'}},
  'party-capacity': {metadata: typography11, scope: {animationId: 'party-capacity', subject: 'civil-procedure', topic: '05'}},
  'party-change': {metadata: typography12, scope: {animationId: 'party-change', subject: 'civil-procedure', topic: '05'}},
  'proper-party': {metadata: typography13, scope: {animationId: 'proper-party', subject: 'civil-procedure', topic: '05'}},
  'joint-litigation': {metadata: typography14, scope: {animationId: 'joint-litigation', subject: 'civil-procedure', topic: '06'}},
  'representative-litigation': {metadata: typography15, scope: {animationId: 'representative-litigation', subject: 'civil-procedure', topic: '06'}},
  'third-party-revocation': {metadata: typography16, scope: {animationId: 'third-party-revocation', subject: 'civil-procedure', topic: '07'}},
  'third-party-types': {metadata: typography17, scope: {animationId: 'third-party-types', subject: 'civil-procedure', topic: '07'}},
  'delegated-agent-badge': {metadata: typography18, scope: {animationId: 'delegated-agent-badge', subject: 'civil-procedure', topic: '08'}},
  'delegated-agent-circuit': {metadata: typography19, scope: {animationId: 'delegated-agent-circuit', subject: 'civil-procedure', topic: '08'}},
  'delegated-agent-stage': {metadata: typography20, scope: {animationId: 'delegated-agent-stage', subject: 'civil-procedure', topic: '08'}},
  'delegated-agent': {metadata: typography21, scope: {animationId: 'delegated-agent', subject: 'civil-procedure', topic: '08'}},
  'statutory-agent-badge': {metadata: typography22, scope: {animationId: 'statutory-agent-badge', subject: 'civil-procedure', topic: '08'}},
  'statutory-agent-circuit': {metadata: typography23, scope: {animationId: 'statutory-agent-circuit', subject: 'civil-procedure', topic: '08'}},
  'statutory-agent-stage': {metadata: typography24, scope: {animationId: 'statutory-agent-stage', subject: 'civil-procedure', topic: '08'}},
  'statutory-agent': {metadata: typography25, scope: {animationId: 'statutory-agent', subject: 'civil-procedure', topic: '08'}},
  'admission-court-record': {metadata: typography26, scope: {animationId: 'admission-court-record', subject: 'civil-procedure', topic: '09'}},
  'burden-of-proof-steps': {metadata: typography27, scope: {animationId: 'burden-of-proof-steps', subject: 'civil-procedure', topic: '09'}},
  'burden-of-proof-caveats': {metadata: typography62, scope: {animationId: 'burden-of-proof-caveats', subject: 'civil-procedure', topic: '09'}},
  'appraisal-opinion': {metadata: typography28, scope: {animationId: 'appraisal-opinion', subject: 'civil-procedure', topic: '10'}},
  'documentary-evidence-rules': {metadata: typography29, scope: {animationId: 'documentary-evidence-rules', subject: 'civil-procedure', topic: '10'}},
  'foreign-document-authentication': {metadata: typography73, scope: {animationId: 'foreign-document-authentication', subject: 'civil-procedure', topic: '10'}},
  'evidence-classification': {metadata: typography30, scope: {animationId: 'evidence-classification', subject: 'civil-procedure', topic: '10'}},
  'inspection-record': {metadata: typography31, scope: {animationId: 'inspection-record', subject: 'civil-procedure', topic: '10'}},
  'party-statements': {metadata: typography32, scope: {animationId: 'party-statements', subject: 'civil-procedure', topic: '10'}},
  'professional-evidence-roles': {metadata: typography33, scope: {animationId: 'professional-evidence-roles', subject: 'civil-procedure', topic: '10'}},
  'statutory-evidence-types': {metadata: typography34, scope: {animationId: 'statutory-evidence-types', subject: 'civil-procedure', topic: '10'}},
  'witness-testimony': {metadata: typography35, scope: {animationId: 'witness-testimony', subject: 'civil-procedure', topic: '10'}},
  'evidence-preservation': {metadata: typography36, scope: {animationId: 'evidence-preservation', subject: 'civil-procedure', topic: '11'}},
  'evidence-review': {metadata: typography37, scope: {animationId: 'evidence-review', subject: 'civil-procedure', topic: '11'}},
  'proof-filing-investigation': {metadata: typography38, scope: {animationId: 'proof-filing-investigation', subject: 'civil-procedure', topic: '11'}},
  'surprise-judgment-focus': {metadata: typography39, scope: {animationId: 'surprise-judgment-focus', subject: 'civil-procedure', topic: '11'}},
  'pre-suit-preservation-transfer': {metadata: typography63, scope: {animationId: 'pre-suit-preservation-transfer', subject: 'civil-procedure', topic: '12'}},
  'preservation-asset-measures': {metadata: typography64, scope: {animationId: 'preservation-asset-measures', subject: 'civil-procedure', topic: '12'}},
  'preservation-remedy-switchboard': {metadata: typography65, scope: {animationId: 'preservation-remedy-switchboard', subject: 'civil-procedure', topic: '12'}},
  'preservation-stage-map': {metadata: typography66, scope: {animationId: 'preservation-stage-map', subject: 'civil-procedure', topic: '12'}},
  'provisional-execution-gates': {metadata: typography67, scope: {animationId: 'provisional-execution-gates', subject: 'civil-procedure', topic: '12'}},
  'provisional-execution-resolution': {metadata: typography68, scope: {animationId: 'provisional-execution-resolution', subject: 'civil-procedure', topic: '12'}},
  'behavior-preservation': {metadata: typography71, scope: {animationId: 'behavior-preservation', subject: 'civil-procedure', topic: '12'}},
  'period-calculation': {metadata: typography69, scope: {animationId: 'period-calculation', subject: 'civil-procedure', topic: '14'}},
  'service-delivery-network': {metadata: typography70, scope: {animationId: 'service-delivery-network', subject: 'civil-procedure', topic: '14'}},
  'mediation-settlement-path': {metadata: typography72, scope: {animationId: 'mediation-settlement-path', subject: 'civil-procedure', topic: '15'}},
  'ordinary-procedure-control-map': {metadata: typography74, scope: {animationId: 'ordinary-procedure-control-map', subject: 'civil-procedure', topic: '16'}},
  'party-death-procedure-effects': {metadata: typography79, scope: {animationId: 'party-death-procedure-effects', subject: 'civil-procedure', topic: '16'}},
  'summary-procedure-switchyard': {metadata: typography75, scope: {animationId: 'summary-procedure-switchyard', subject: 'civil-procedure', topic: '17'}},
  'public-interest-litigation-network': {metadata: typography76, scope: {animationId: 'public-interest-litigation-network', subject: 'civil-procedure', topic: '18'}},
  'third-party-revocation-remedy-map': {metadata: typography77, scope: {animationId: 'third-party-revocation-remedy-map', subject: 'civil-procedure', topic: '19'}},
  'appeal-review-decision-map': {metadata: typography78, scope: {animationId: 'appeal-review-decision-map', subject: 'civil-procedure', topic: '20'}},
  'retrial-supervision-control-map': {metadata: typography80, scope: {animationId: 'retrial-supervision-control-map', subject: 'civil-procedure', topic: '20'}},
  'instance-claim-counterclaim-map': {metadata: typography92, scope: {animationId: 'instance-claim-counterclaim-map', subject: 'civil-procedure', topic: '20'}},
  'special-procedure-remedy-map': {metadata: typography81, scope: {animationId: 'special-procedure-remedy-map', subject: 'civil-procedure', topic: '21'}},
  'payment-order-gate': {metadata: typography82, scope: {animationId: 'payment-order-gate', subject: 'civil-procedure', topic: '22'}},
  'public-notice-cancellation-path': {metadata: typography83, scope: {animationId: 'public-notice-cancellation-path', subject: 'civil-procedure', topic: '23'}},
  'enforcement-control-network': {metadata: typography84, scope: {animationId: 'enforcement-control-network', subject: 'civil-procedure', topic: '24'}},
  'cross-border-procedure-compass': {metadata: typography85, scope: {animationId: 'cross-border-procedure-compass', subject: 'civil-procedure', topic: '25'}},
  'arbitration-validity-route': {metadata: typography86, scope: {animationId: 'arbitration-validity-route', subject: 'civil-procedure', topic: '26'}},
  'contract-issue-reframing': {metadata: typography87, scope: {animationId: 'contract-issue-reframing', subject: 'civil-procedure', topic: '27'}},
  'reciprocal-performance-judgments': {metadata: typography88, scope: {animationId: 'reciprocal-performance-judgments', subject: 'civil-procedure', topic: '28'}},
  'subrogation-litigation-network': {metadata: typography89, scope: {animationId: 'subrogation-litigation-network', subject: 'civil-procedure', topic: '29'}},
  'revocation-action-execution-chain': {metadata: typography90, scope: {animationId: 'revocation-action-execution-chain', subject: 'civil-procedure', topic: '30'}},
  'termination-withdrawal-timeline': {metadata: typography91, scope: {animationId: 'termination-withdrawal-timeline', subject: 'civil-procedure', topic: '31'}},
  'penalty-adjustment-procedure': {metadata: typography93, scope: {animationId: 'penalty-adjustment-procedure', subject: 'civil-procedure', topic: '32'}},
  'contract-book-atlas': {metadata: typography94, scope: {animationId: 'contract-book-atlas', subject: 'civil-law', topic: 'contracts'}},
  'security-publicity-fate': {metadata: typographySpf, scope: {animationId: 'security-publicity-fate', subject: 'civil-law', topic: '14'}},
  'six-principles-pillars': {metadata: typographySpp, scope: {animationId: 'six-principles-pillars', subject: 'civil-law', topic: '01'}},
  'application-of-law': {metadata: typographyAutoApplicationOfLaw, scope: {animationId: 'application-of-law', subject: 'theoretical-law', topic: '01'}},
  'legal-loopholes': {metadata: typographyLh, scope: {animationId: 'legal-loopholes', subject: 'theoretical-law', topic: '01'}},
  'bankruptcy-reorganization': {metadata: typographyAutoBankruptcyReorganization, scope: {animationId: 'bankruptcy-reorganization', subject: 'commercial-law', topic: '12'}},
  'bankruptcy-liquidation': {metadata: typographyAutoBankruptcyLiquidation, scope: {animationId: 'bankruptcy-liquidation', subject: 'commercial-law', topic: '12'}},
  'recovery-right': {metadata: typographyAutoRecoveryRight, scope: {animationId: 'recovery-right', subject: 'commercial-law', topic: '11'}},
  'reclaim-right': {metadata: typographyAutoReclaimRight, scope: {animationId: 'reclaim-right', subject: 'commercial-law', topic: '11'}},
  'debtor-property-scope': {metadata: typographyAutoDebtorPropertyScope, scope: {animationId: 'debtor-property-scope', subject: 'commercial-law', topic: '11'}},
  'bankruptcy-revocation-right': {metadata: typographyAutoBankruptcyRevocationRight, scope: {animationId: 'bankruptcy-revocation-right', subject: 'commercial-law', topic: '11'}},
  'creditors-meeting': {metadata: typographyAutoCreditorsMeeting, scope: {animationId: 'creditors-meeting', subject: 'commercial-law', topic: '10'}},
  'claim-filing': {metadata: typographyAutoClaimFiling, scope: {animationId: 'claim-filing', subject: 'commercial-law', topic: '10'}},
  'bankruptcy-grounds': {metadata: typographyAutoBankruptcyGrounds, scope: {animationId: 'bankruptcy-grounds', subject: 'commercial-law', topic: '09'}},
  'bankruptcy-costs': {metadata: typographyAutoBankruptcyCosts, scope: {animationId: 'bankruptcy-costs', subject: 'commercial-law', topic: '09'}},
  'bankruptcy-application': {metadata: typographyAutoBankruptcyApplication, scope: {animationId: 'bankruptcy-application', subject: 'commercial-law', topic: '09'}},
  'bankruptcy-administrator': {metadata: typographyAutoBankruptcyAdministrator, scope: {animationId: 'bankruptcy-administrator', subject: 'commercial-law', topic: '09'}},
  'company-liquidation': {metadata: typographyAutoCompanyLiquidation, scope: {animationId: 'company-liquidation', subject: 'commercial-law', topic: '08'}},
  'company-dissolution': {metadata: typographyAutoCompanyDissolution, scope: {animationId: 'company-dissolution', subject: 'commercial-law', topic: '08'}},
  'share-issuance-transfer': {metadata: typographyAutoShareIssuanceTransfer, scope: {animationId: 'share-issuance-transfer', subject: 'commercial-law', topic: '07'}},
  'llc-equity-transfer': {metadata: typographyAutoLlcEquityTransfer, scope: {animationId: 'llc-equity-transfer', subject: 'commercial-law', topic: '07'}},
  'company-restructuring': {metadata: typographyAutoCompanyRestructuring, scope: {animationId: 'company-restructuring', subject: 'commercial-law', topic: '07'}},
  'resolution-validity': {metadata: typographyAutoResolutionValidity, scope: {animationId: 'resolution-validity', subject: 'commercial-law', topic: '06'}},
  'corporate-organs': {metadata: typographyAutoCorporateOrgans, scope: {animationId: 'corporate-organs', subject: 'commercial-law', topic: '06'}},
  'shareholder-representative-action': {metadata: typographyAutoShareholderRepresentativeAction, scope: {animationId: 'shareholder-representative-action', subject: 'commercial-law', topic: '05'}},
  'director-duties': {metadata: typographyAutoDirectorDuties, scope: {animationId: 'director-duties', subject: 'commercial-law', topic: '05'}},
  'information-right': {metadata: typographyAutoInformationRight, scope: {animationId: 'information-right', subject: 'commercial-law', topic: '04'}},
  'rights-shield-armory': {metadata: typographyAutoRightsShieldArmory, scope: {animationId: 'rights-shield-armory', subject: 'civil-law', topic: '01'}},
  'capacity-guardianship-registry': {metadata: typographyAutoCapacityGuardianshipRegistry, scope: {animationId: 'capacity-guardianship-registry', subject: 'civil-law', topic: '02'}},
  'absence-proclamation-hall': {metadata: typographyAutoAbsenceProclamationHall, scope: {animationId: 'absence-proclamation-hall', subject: 'civil-law', topic: '02'}},
  'representation-authority-desk': {metadata: typographyAutoRepresentationAuthorityDesk, scope: {animationId: 'representation-authority-desk', subject: 'civil-law', topic: '02'}},
  'legal-person-independence-hall': {metadata: typographyAutoLegalPersonIndependenceHall, scope: {animationId: 'legal-person-independence-hall', subject: 'civil-law', topic: '02'}},
  'intention-expression-hall': {metadata: typographyAutoIntentionExpressionHall, scope: {animationId: 'intention-expression-hall', subject: 'civil-law', topic: '03'}},
  'effectiveness-activation-hall': {metadata: typographyAutoEffectivenessActivationHall, scope: {animationId: 'effectiveness-activation-hall', subject: 'civil-law', topic: '03'}},
  'defect-remedy-verdict-hall': {metadata: typographyAutoDefectRemedyVerdictHall, scope: {animationId: 'defect-remedy-verdict-hall', subject: 'civil-law', topic: '03'}},
  'agency-authority-hall': {metadata: typographyAutoAgencyAuthorityHall, scope: {animationId: 'agency-authority-hall', subject: 'civil-law', topic: '04'}},
  'limitation-clock-hall': {metadata: typographyAutoLimitationClockHall, scope: {animationId: 'limitation-clock-hall', subject: 'civil-law', topic: '04'}},
  'negotiorum-management-hall': {metadata: typographyAutoNegotiorumManagementHall, scope: {animationId: 'negotiorum-management-hall', subject: 'civil-law', topic: '05'}},
  'unjust-enrichment-hall': {metadata: typographyAutoUnjustEnrichmentHall, scope: {animationId: 'unjust-enrichment-hall', subject: 'civil-law', topic: '05'}},
  'property-system-hall': {metadata: typographyAutoPropertySystemHall, scope: {animationId: 'property-system-hall', subject: 'civil-law', topic: '06'}},
  'transfer-mode-hall': {metadata: typographyAutoTransferModeHall, scope: {animationId: 'transfer-mode-hall', subject: 'civil-law', topic: '06'}},
  'adoption-dossier-registry': {metadata: typographyAutoAdoptionDossierRegistry, scope: {animationId: 'adoption-dossier-registry', subject: 'civil-law', topic: '21'}},
  'delivery-registry-hall': {metadata: typographyAutoDeliveryRegistryHall, scope: {animationId: 'delivery-registry-hall', subject: 'civil-law', topic: '06'}},
  'pre-registration-hall': {metadata: typographyAutoPreRegistrationHall, scope: {animationId: 'pre-registration-hall', subject: 'civil-law', topic: '06'}},
  'good-faith-acquisition-hall': {metadata: typographyAutoGoodFaithAcquisitionHall, scope: {animationId: 'good-faith-acquisition-hall', subject: 'civil-law', topic: '07'}},
  'dividend-right': {metadata: typographyAutoDividendRight, scope: {animationId: 'dividend-right', subject: 'commercial-law', topic: '04'}},
  'shareholder-qualification': {metadata: typographyAutoShareholderQualification, scope: {animationId: 'shareholder-qualification', subject: 'commercial-law', topic: '03'}},
  'nominal-shareholder': {metadata: typographyAutoNominalShareholder, scope: {animationId: 'nominal-shareholder', subject: 'commercial-law', topic: '03'}},
  'shareholder-contribution': {metadata: typographyAutoShareholderContribution, scope: {animationId: 'shareholder-contribution', subject: 'commercial-law', topic: '02'}},
  'promoter': {metadata: typographyAutoPromoter, scope: {animationId: 'promoter', subject: 'commercial-law', topic: '02'}},
  'company-incorporation': {metadata: typographyAutoCompanyIncorporation, scope: {animationId: 'company-incorporation', subject: 'commercial-law', topic: '02'}},
  'company-personality': {metadata: typographyAutoCompanyPersonality, scope: {animationId: 'company-personality', subject: 'commercial-law', topic: '01'}},
  'company-classification': {metadata: typographyAutoCompanyClassification, scope: {animationId: 'company-classification', subject: 'commercial-law', topic: '01'}},
  'company-capacity': {metadata: typographyAutoCompanyCapacity, scope: {animationId: 'company-capacity', subject: 'commercial-law', topic: '01'}},
  'evidence-vitrine-museum': {metadata: typographyAutoEvidenceVitrineMuseum, scope: {animationId: 'evidence-vitrine-museum', subject: 'administrative-law', topic: '16'}},
  'application-silk-loom': {metadata: typographyAutoApplicationSilkLoom, scope: {animationId: 'application-silk-loom', subject: 'administrative-law', topic: '17'}},
  'judgment-execution-clockwork': {metadata: typographyAutoJudgmentExecutionClockwork, scope: {animationId: 'judgment-execution-clockwork', subject: 'administrative-law', topic: '18'}},
  'review-relay-network': {metadata: typographyAutoReviewRelayNetwork, scope: {animationId: 'review-relay-network', subject: 'administrative-law', topic: '19'}},
  'contract-twin-mast-harbor': {metadata: typographyAutoContractTwinMastHarbor, scope: {animationId: 'contract-twin-mast-harbor', subject: 'administrative-law', topic: '22'}},
  'reckoning-abacus-desk': {metadata: typographyAutoReckoningAbacusDesk, scope: {animationId: 'reckoning-abacus-desk', subject: 'administrative-law', topic: '24'}},
  'bamboo-scroll-restoration': {metadata: typographyAutoBambooScrollRestoration, scope: {animationId: 'bamboo-scroll-restoration', subject: 'administrative-law', topic: '23'}},
  'lighthouse-watch-network': {metadata: typographyAutoLighthouseWatchNetwork, scope: {animationId: 'lighthouse-watch-network', subject: 'administrative-law', topic: '20'}},
  'disclosure-darkroom-studio': {metadata: typographyAutoDisclosureDarkroomStudio, scope: {animationId: 'disclosure-darkroom-studio', subject: 'administrative-law', topic: '21'}},
  'legal-reasoning': {metadata: typographyAutoLegalReasoning, scope: {animationId: 'legal-reasoning', subject: 'theoretical-law', topic: '01'}},
  'legal-families': {metadata: typographyFam, scope: {animationId: 'legal-families', subject: 'theoretical-law', topic: '01'}},
  'legal-modernization': {metadata: typographyMod, scope: {animationId: 'legal-modernization', subject: 'theoretical-law', topic: '01'}},
  'law-and-morality': {metadata: typographyLm, scope: {animationId: 'law-and-morality', subject: 'theoretical-law', topic: '01'}},
  'law-and-human-rights': {metadata: typographyHr, scope: {animationId: 'law-and-human-rights', subject: 'theoretical-law', topic: '01'}},
  'compulsory-summons-gate': {metadata: typographyCsg, scope: {animationId: 'compulsory-summons-gate', subject: 'civil-procedure', topic: '12'}},
  'sources-of-law': {metadata: typography109, scope: {animationId: 'sources-of-law', subject: 'theoretical-law', topic: '01'}},
  'legal-interpretation': {metadata: typography96, scope: {animationId: 'legal-interpretation', subject: 'theoretical-law', topic: '17'}},
  'evidence-exclusion-lattice': {metadata: typography97, scope: {animationId: 'evidence-exclusion-lattice', subject: 'criminal-procedure', topic: '07'}},
  'concept-of-law-dispute': {metadata: typography98, scope: {animationId: 'concept-of-law-dispute', subject: 'theoretical-law', topic: '01'}},
  'marxist-law-essence': {metadata: typography101, scope: {animationId: 'marxist-law-essence', subject: 'theoretical-law', topic: '01'}},
  'features-of-law': {metadata: typography102, scope: {animationId: 'features-of-law', subject: 'theoretical-law', topic: '01'}},
  'functions-of-law': {metadata: typography103, scope: {animationId: 'functions-of-law', subject: 'theoretical-law', topic: '01'}},
  'limitations-of-law': {metadata: typography104, scope: {animationId: 'limitations-of-law', subject: 'theoretical-law', topic: '01'}},
  'value-conflict': {metadata: typography105, scope: {animationId: 'value-conflict', subject: 'theoretical-law', topic: '01'}},
  'legal-rules': {metadata: typography106, scope: {animationId: 'legal-rules', subject: 'theoretical-law', topic: '01'}},
  'legal-principles': {metadata: typography107, scope: {animationId: 'legal-principles', subject: 'theoretical-law', topic: '01'}},
  'liability-concurrence': {metadata: typographyLc, scope: {animationId: 'liability-concurrence', subject: 'theoretical-law', topic: '01'}},
  'judicial-vs-administrative': {metadata: typographyJv, scope: {animationId: 'judicial-vs-administrative', subject: 'theoretical-law', topic: '01'}},
  'legal-departments-system': {metadata: typographyTds, scope: {animationId: 'legal-departments-system', subject: 'theoretical-law', topic: '01'}},
  'legal-validity': {metadata: typographyLv, scope: {animationId: 'legal-validity', subject: 'theoretical-law', topic: '01'}},
  'legal-relations': {metadata: typographyLr, scope: {animationId: 'legal-relations', subject: 'theoretical-law', topic: '01'}},
  'procedure-structure-orrery': {metadata: typography99, scope: {animationId: 'procedure-structure-orrery', subject: 'criminal-procedure', topic: '01'}},
  'sources-of-international-law': {metadata: typography100, scope: {animationId: 'sources-of-international-law', subject: 'international-law', topic: '01'}},
  'subjects-responsibility': {metadata: typographyIl02, scope: {animationId: 'subjects-responsibility', subject: 'international-law', topic: '02'}},
  'spatial-regimes': {metadata: typographyIl03, scope: {animationId: 'spatial-regimes', subject: 'international-law', topic: '03'}},
  'individuals-regimes': {metadata: typographyIl04, scope: {animationId: 'individuals-regimes', subject: 'international-law', topic: '04'}},
  'diplomatic-consular': {metadata: typographyIl05, scope: {animationId: 'diplomatic-consular', subject: 'international-law', topic: '05'}},
  'law-of-treaties': {metadata: typographyIl06, scope: {animationId: 'law-of-treaties', subject: 'international-law', topic: '06'}},
  'dispute-settlement': {metadata: typographyIl07, scope: {animationId: 'dispute-settlement', subject: 'international-law', topic: '07'}},
  'war-armed-conflict': {metadata: typographyIl08, scope: {animationId: 'war-armed-conflict', subject: 'international-law', topic: '08'}},
  'cross-border-disputes': {metadata: typographyIl09, scope: {animationId: 'cross-border-disputes', subject: 'international-law', topic: '09'}},
  'conflict-of-laws-rules': {metadata: typographyIl10, scope: {animationId: 'conflict-of-laws-rules', subject: 'international-law', topic: '10'}},
  'applicable-law': {metadata: typographyIl11, scope: {animationId: 'applicable-law', subject: 'international-law', topic: '11'}},
  'interregional-assistance': {metadata: typographyIl13, scope: {animationId: 'interregional-assistance', subject: 'international-law', topic: '13'}},
  'wto': {metadata: typographyIl18, scope: {animationId: 'wto', subject: 'international-law', topic: '18'}},
  'goods-transport-insurance': {metadata: typographyIl15, scope: {animationId: 'goods-transport-insurance', subject: 'international-law', topic: '15'}},
  'extraterritorial-assistance': {metadata: typographyIl12, scope: {animationId: 'extraterritorial-assistance', subject: 'international-law', topic: '12'}},
  'international-sale-of-goods': {metadata: typographyIl14, scope: {animationId: 'international-sale-of-goods', subject: 'international-law', topic: '14'}},
  'international-trade-payment': {metadata: typographyIl16, scope: {animationId: 'international-trade-payment', subject: 'international-law', topic: '16'}},
  'foreign-trade-administration': {metadata: typographyIl17, scope: {animationId: 'foreign-trade-administration', subject: 'international-law', topic: '17'}},
  'other-regimes-international-economic-law': {metadata: typographyIl19, scope: {animationId: 'other-regimes-international-economic-law', subject: 'international-law', topic: '19'}},
  'plea-leniency-caliper': {metadata: typographyCpPleaCaliper, scope: {animationId: 'plea-leniency-caliper', subject: 'criminal-procedure', topic: '02'}},
  'organs-relay-map': {metadata: typographyCpOrgansRelay, scope: {animationId: 'organs-relay-map', subject: 'criminal-procedure', topic: '03'}},
  'jurisdiction-sluice-terrace': {metadata: typographyCpJurisdiction, scope: {animationId: 'jurisdiction-sluice-terrace', subject: 'criminal-procedure', topic: '04'}},
  'recusal-sentry-rotation': {metadata: typographyCpRecusal, scope: {animationId: 'recusal-sentry-rotation', subject: 'criminal-procedure', topic: '05'}},
  'defense-pilot-harbor': {metadata: typographyCpPilot, scope: {animationId: 'defense-pilot-harbor', subject: 'criminal-procedure', topic: '06'}},
  'coercion-pressure-ladder': {metadata: typographyCpBoiler, scope: {animationId: 'coercion-pressure-ladder', subject: 'criminal-procedure', topic: '08'}},
  'attached-suit-viaduct': {metadata: typographyCpViaduct, scope: {animationId: 'attached-suit-viaduct', subject: 'criminal-procedure', topic: '09'}},
  'period-escapement-works': {metadata: typographyCpEscapement, scope: {animationId: 'period-escapement-works', subject: 'criminal-procedure', topic: '10'}},
  'case-filing-gatehouse': {metadata: typographyCpGatehouse, scope: {animationId: 'case-filing-gatehouse', subject: 'criminal-procedure', topic: '11'}},
  'supplement-invest-loop': {metadata: typographyCpLoop, scope: {animationId: 'supplement-invest-loop', subject: 'criminal-procedure', topic: '12'}},
  'nonprosecution-signal-tower': {metadata: typographyCpTower, scope: {animationId: 'nonprosecution-signal-tower', subject: 'criminal-procedure', topic: '13'}},
  'trial-bench-composition': {metadata: typographyCpBench, scope: {animationId: 'trial-bench-composition', subject: 'criminal-procedure', topic: '14'}},
  'first-instance-procession': {metadata: typographyCpStreet, scope: {animationId: 'first-instance-procession', subject: 'criminal-procedure', topic: '15'}},
  'appeal-no-escalation-lock': {metadata: typographyCpOneway, scope: {animationId: 'appeal-no-escalation-lock', subject: 'criminal-procedure', topic: '16'}},
  'retrial-rewind-loom': {metadata: typographyCpLoom, scope: {animationId: 'retrial-rewind-loom', subject: 'criminal-procedure', topic: '18'}},
  'execution-dispatch-board': {metadata: typographyCpDispatch, scope: {animationId: 'execution-dispatch-board', subject: 'criminal-procedure', topic: '19'}},
  'juvenile-observatory-greenhouse': {metadata: typographyCpGreenhouse, scope: {animationId: 'juvenile-observatory-greenhouse', subject: 'criminal-procedure', topic: '20'}},
  'death-review-summit': {metadata: typographyCpSummit, scope: {animationId: 'death-review-summit', subject: 'criminal-procedure', topic: '17'}},
  'reconciliation-scale-pavilion': {metadata: typographyCpPavilion, scope: {animationId: 'reconciliation-scale-pavilion', subject: 'criminal-procedure', topic: '21'}},
  'onyx-courier': {metadata: typographyCpCourier, scope: {animationId: 'onyx-courier', subject: 'criminal-procedure', topic: '22'}},
  'asset-seal-vault': {metadata: typographyCpVault, scope: {animationId: 'asset-seal-vault', subject: 'criminal-procedure', topic: '23'}},
  'mandatory-care-gate': {metadata: typographyCpCareGate, scope: {animationId: 'mandatory-care-gate', subject: 'criminal-procedure', topic: '24'}},
  'dual-track-relay': {metadata: typographyCpRelay, scope: {animationId: 'dual-track-relay', subject: 'criminal-procedure', topic: '25'}},
  'card-selling-funds-viewpoint': {metadata: typography40, scope: {animationId: 'card-selling-funds-viewpoint', subject: 'criminal', topic: '19'}},
  'occupational-embezzlement-flowchart': {metadata: typography41, scope: {animationId: 'occupational-embezzlement-flowchart', subject: 'criminal', topic: '19'}},
  'property-interests-keypoints': {metadata: typography42, scope: {animationId: 'property-interests-keypoints', subject: 'criminal', topic: '19'}},
  'theft-mistake-analysis': {metadata: typography43, scope: {animationId: 'theft-mistake-analysis', subject: 'criminal', topic: '19'}},
  'commencement-threshold-map': {metadata: typographyCt11, scope: {animationId: 'commencement-threshold-map', subject: 'criminal', topic: '11'}},
  'penal-frontier-range': {metadata: typographyAutoPenalFrontierRange, scope: {animationId: 'penal-frontier-range', subject: 'criminal', topic: '01'}},
  'crime-constitution-atlas': {metadata: typographyAutoCrimeConstitutionAtlas, scope: {animationId: 'crime-constitution-atlas', subject: 'criminal', topic: '02'}},
  'interest-rights-balance': {metadata: typographyAutoInterestRightsBalance, scope: {animationId: 'interest-rights-balance', subject: 'criminal', topic: '03'}},
  'identity-unit-subject': {metadata: typographyAutoIdentityUnitSubject, scope: {animationId: 'identity-unit-subject', subject: 'criminal', topic: '04'}},
  'conduct-omission-gates': {metadata: typographyAutoConductOmissionGates, scope: {animationId: 'conduct-omission-gates', subject: 'criminal', topic: '05'}},
  'harm-result-aggravation': {metadata: typographyAutoHarmResultAggravation, scope: {animationId: 'harm-result-aggravation', subject: 'criminal', topic: '06'}},
  'causation-attribution-flow': {metadata: typographyAutoCausationAttributionFlow, scope: {animationId: 'causation-attribution-flow', subject: 'criminal', topic: '07'}},
  'intent-mens-rea-map': {metadata: typographyAutoIntentMensReaMap, scope: {animationId: 'intent-mens-rea-map', subject: 'criminal', topic: '08'}},
  'justification-defense-necessity': {metadata: typographyAutoJustificationDefenseNecessity, scope: {animationId: 'justification-defense-necessity', subject: 'criminal', topic: '09'}},
  'culpability-ring-assay': {metadata: typographyAutoCulpabilityRingAssay, scope: {animationId: 'culpability-ring-assay', subject: 'criminal', topic: '10'}},
  'crime-number-reckoning': {metadata: typographyAutoCrimeNumberReckoning, scope: {animationId: 'crime-number-reckoning', subject: 'criminal', topic: '13'}},
  'penalty-scale-office': {metadata: typographyAutoPenaltyScaleOffice, scope: {animationId: 'penalty-scale-office', subject: 'criminal', topic: '14'}},
  'sentencing-measure-hall': {metadata: typographyAutoSentencingMeasureHall, scope: {animationId: 'sentencing-measure-hall', subject: 'criminal', topic: '15'}},
  'complicity-principles-joint-principal': {metadata: typographyAutoComplicityPrinciplesJointPrincipal, scope: {animationId: 'complicity-principles-joint-principal', subject: 'criminal', topic: '12'}},
  'indirect-perpetrator-dominion': {metadata: typographyAutoIndirectPerpetratorDominion, scope: {animationId: 'indirect-perpetrator-dominion', subject: 'criminal', topic: '12'}},
  'instigator-abettor-roles': {metadata: typographyAutoInstigatorAbettorRoles, scope: {animationId: 'instigator-abettor-roles', subject: 'criminal', topic: '12'}},
  'execution-expiry-station': {metadata: typographyAutoExecutionExpiryStation, scope: {animationId: 'execution-expiry-station', subject: 'criminal', topic: '16'}},
  'clause-atlas-notice-fiction': {metadata: typographyAutoClauseAtlasNoticeFiction, scope: {animationId: 'clause-atlas-notice-fiction', subject: 'criminal', topic: '17'}},
  'body-crime-purpose-map': {metadata: typographyAutoBodyCrimePurposeMap, scope: {animationId: 'body-crime-purpose-map', subject: 'criminal', topic: '18'}},
  'property-crime-ledger': {metadata: typographyAutoPropertyCrimeLedger, scope: {animationId: 'property-crime-ledger', subject: 'criminal', topic: '19'}},
  'public-safety-alert-board': {metadata: typographyAutoPublicSafetyAlertBoard, scope: {animationId: 'public-safety-alert-board', subject: 'criminal', topic: '20'}},
  'econ-crime-filing': {metadata: typographyAutoEconCrimeFiling, scope: {animationId: 'econ-crime-filing', subject: 'criminal', topic: '21'}},
  'detention-clause-ladder': {metadata: typographyAutoDetentionClauseLadder, scope: {animationId: 'detention-clause-ladder', subject: 'criminal', topic: '18'}},
  'dereliction-duty-desk': {metadata: typographyAutoDerelictionDutyDesk, scope: {animationId: 'dereliction-duty-desk', subject: 'criminal', topic: '24'}},
  'state-security-wire-room': {metadata: typographyAutoStateSecurityWireRoom, scope: {animationId: 'state-security-wire-room', subject: 'criminal', topic: '25'}},
  'power-money-exchange': {metadata: typographyAutoPowerMoneyExchange, scope: {animationId: 'power-money-exchange', subject: 'criminal', topic: '23'}},
  'public-order-watch-tower': {metadata: typographyAutoPublicOrderWatchTower, scope: {animationId: 'public-order-watch-tower', subject: 'criminal', topic: '22'}},
  'legislation-law': {metadata: typographyLl, scope: {animationId: 'legislation-law', subject: 'theoretical-law', topic: '01'}},
  'features-of-constitution': {metadata: typographyFc, scope: {animationId: 'features-of-constitution', subject: 'theoretical-law', topic: '01'}},
  'creation-of-constitution': {metadata: typographyCo, scope: {animationId: 'creation-of-constitution', subject: 'theoretical-law', topic: '01'}},
  'constitution-classification': {metadata: typographyCc, scope: {animationId: 'constitution-classification', subject: 'theoretical-law', topic: '01'}},
  'constitution-development': {metadata: typographyCdv, scope: {animationId: 'constitution-development', subject: 'theoretical-law', topic: '01'}},
  'constitution-principles': {metadata: typographyCp, scope: {animationId: 'constitution-principles', subject: 'theoretical-law', topic: '01'}},
  'constitution-sources-structure': {metadata: typographyCss, scope: {animationId: 'constitution-sources-structure', subject: 'theoretical-law', topic: '01'}},
  'state-system': {metadata: typographySs, scope: {animationId: 'state-system', subject: 'theoretical-law', topic: '01'}},
  'election-law': {metadata: typographyEl, scope: {animationId: 'election-law', subject: 'theoretical-law', topic: '01'}},
  'state-structure-divisions': {metadata: typographySsd, scope: {animationId: 'state-structure-divisions', subject: 'theoretical-law', topic: '01'}},
  'regional-ethnic-autonomy': {metadata: typographyRea, scope: {animationId: 'regional-ethnic-autonomy', subject: 'theoretical-law', topic: '01'}},
  'special-administrative-regions': {metadata: typographySar, scope: {animationId: 'special-administrative-regions', subject: 'theoretical-law', topic: '01'}},
  'zhou-legal-history': {metadata: typographyZhou, scope: {animationId: 'zhou-legal-history', subject: 'theoretical-law', topic: '03'}},
  'spring-autumn-warring-states': {metadata: typographySaw, scope: {animationId: 'spring-autumn-warring-states', subject: 'theoretical-law', topic: '03'}},
  'han-confucianization': {metadata: typographyHan, scope: {animationId: 'han-confucianization', subject: 'theoretical-law', topic: '03'}},
  'wei-jin-nanbei-chaodai': {metadata: typographyWjn, scope: {animationId: 'wei-jin-nanbei-chaodai', subject: 'theoretical-law', topic: '03'}},
  'tang-code-liuzang-liusha': {metadata: typographyTcl, scope: {animationId: 'tang-code-liuzang-liusha', subject: 'theoretical-law', topic: '03'}},
  'qing-dynasty-examples': {metadata: typographyQde, scope: {animationId: 'qing-dynasty-examples', subject: 'theoretical-law', topic: '03'}},
  'economic-system': {metadata: typographyEs, scope: {animationId: 'economic-system', subject: 'theoretical-law', topic: '01'}},
  'social-system': {metadata: typographyAutoSocialSystem, scope: {animationId: 'social-system', subject: 'theoretical-law', topic: '01'}},
  'republic-constitution-history': {metadata: typographyAutoRepublicConstitutionHistory, scope: {animationId: 'republic-constitution-history', subject: 'theoretical-law', topic: '03'}},
  'new-democratic-legal-system': {metadata: typographyNdl, scope: {animationId: 'new-democratic-legal-system', subject: 'theoretical-law', topic: '03'}},
  'legal-history-firsts': {metadata: typographyLhf, scope: {animationId: 'legal-history-firsts', subject: 'theoretical-law', topic: '03'}},
  'grassroots-autonomy': {metadata: typographyGa, scope: {animationId: 'grassroots-autonomy', subject: 'theoretical-law', topic: '01'}},
  'citizen-fundamental-rights': {metadata: typographyCfr, scope: {animationId: 'citizen-fundamental-rights', subject: 'theoretical-law', topic: '01'}},
  'npc-standing-committee': {metadata: typographyNsc, scope: {animationId: 'npc-standing-committee', subject: 'theoretical-law', topic: '01'}},
  'national-honors': {metadata: typographyNh, scope: {animationId: 'national-honors', subject: 'theoretical-law', topic: '01'}},
  'state-council': {metadata: typographyScouncil, scope: {animationId: 'state-council', subject: 'theoretical-law', topic: '01'}},
  'emergency-decisions': {metadata: typographyEmd, scope: {animationId: 'emergency-decisions', subject: 'theoretical-law', topic: '01'}},
  'central-military-commission': {metadata: typographyCmc, scope: {animationId: 'central-military-commission', subject: 'theoretical-law', topic: '01'}},
  'supervisory-organs': {metadata: typographySup, scope: {animationId: 'supervisory-organs', subject: 'theoretical-law', topic: '01'}},
  'local-people-congresses': {metadata: typographyLpc, scope: {animationId: 'local-people-congresses', subject: 'theoretical-law', topic: '01'}},
  'constitutional-supervision': {metadata: typographyConst, scope: {animationId: 'constitutional-supervision', subject: 'theoretical-law', topic: '01'}},
  'judicial-system-overview': {metadata: typographyJso, scope: {animationId: 'judicial-system-overview', subject: 'theoretical-law', topic: '04'}},
  'judicial-characteristics': {metadata: typographyJc, scope: {animationId: 'judicial-characteristics', subject: 'theoretical-law', topic: '04'}},
  'judicial-functions': {metadata: typographyJf, scope: {animationId: 'judicial-functions', subject: 'theoretical-law', topic: '04'}},
  'judicial-fairness-efficiency': {metadata: typographyJfe, scope: {animationId: 'judicial-fairness-efficiency', subject: 'theoretical-law', topic: '04'}},
  'judicial-independence': {metadata: typographyJi, scope: {animationId: 'judicial-independence', subject: 'theoretical-law', topic: '04'}},
  'legal-professional-ethics': {metadata: typographyLpe, scope: {animationId: 'legal-professional-ethics', subject: 'theoretical-law', topic: '04'}},
  'judge-qualifications': {metadata: typographyJq, scope: {animationId: 'judge-qualifications', subject: 'theoretical-law', topic: '04'}},
  'judge-management': {metadata: typographyJm, scope: {animationId: 'judge-management', subject: 'theoretical-law', topic: '04'}},
  'judge-ethics': {metadata: typographyJe, scope: {animationId: 'judge-ethics', subject: 'theoretical-law', topic: '04'}},
  'judge-liability': {metadata: typographyJl, scope: {animationId: 'judge-liability', subject: 'theoretical-law', topic: '04'}},
  'people-assessors': {metadata: typographyPa, scope: {animationId: 'people-assessors', subject: 'theoretical-law', topic: '04'}},
  'procuratorial-principles': {metadata: typographyPp, scope: {animationId: 'procuratorial-principles', subject: 'theoretical-law', topic: '04'}},
  'procuratorate-leadership': {metadata: typographyPl, scope: {animationId: 'procuratorate-leadership', subject: 'theoretical-law', topic: '04'}},
  'procurator-ethics': {metadata: typographyPe, scope: {animationId: 'procurator-ethics', subject: 'theoretical-law', topic: '04'}},
  'judge-procurator-discipline': {metadata: typographyJpd, scope: {animationId: 'judge-procurator-discipline', subject: 'theoretical-law', topic: '04'}},
  'lawyer-system': {metadata: typographyLs, scope: {animationId: 'lawyer-system', subject: 'theoretical-law', topic: '04'}},
  'law-firm-establishment': {metadata: typographyLfe, scope: {animationId: 'law-firm-establishment', subject: 'theoretical-law', topic: '04'}},
  'law-firm-types': {metadata: typographyLft, scope: {animationId: 'law-firm-types', subject: 'theoretical-law', topic: '04'}},
  'client-attorney-relations': {metadata: typographyCar, scope: {animationId: 'client-attorney-relations', subject: 'theoretical-law', topic: '04'}},
  'lawyer-promotion': {metadata: typographyLp, scope: {animationId: 'lawyer-promotion', subject: 'theoretical-law', topic: '04'}},
  'lawyer-fees': {metadata: typographyLf, scope: {animationId: 'lawyer-fees', subject: 'theoretical-law', topic: '04'}},
  'lawyer-peer-relations': {metadata: typographyLpr, scope: {animationId: 'lawyer-peer-relations', subject: 'theoretical-law', topic: '04'}},
  'legal-aid': {metadata: typographyLa, scope: {animationId: 'legal-aid', subject: 'theoretical-law', topic: '04'}},
  'notary-qualifications': {metadata: typographyNq, scope: {animationId: 'notary-qualifications', subject: 'theoretical-law', topic: '04'}},
  'notary-organs': {metadata: typographyNo, scope: {animationId: 'notary-organs', subject: 'theoretical-law', topic: '04'}},
  'notary-refusal': {metadata: typographyNr, scope: {animationId: 'notary-refusal', subject: 'theoretical-law', topic: '04'}},
  'notary-procedure': {metadata: typographyNpr, scope: {animationId: 'notary-procedure', subject: 'theoretical-law', topic: '04'}},
  'notary-rights-duties': {metadata: typographyNrd, scope: {animationId: 'notary-rights-duties', subject: 'theoretical-law', topic: '04'}},
  'notary-remedies': {metadata: typographyNre, scope: {animationId: 'notary-remedies', subject: 'theoretical-law', topic: '04'}},
  'notary-ethics-liability': {metadata: typographyNel, scope: {animationId: 'notary-ethics-liability', subject: 'theoretical-law', topic: '04'}},
  'xi-rule-of-law-formation': {metadata: typographyXrf, scope: {animationId: 'xi-rule-of-law-formation', subject: 'theoretical-law', topic: '05'}},
  'xi-rule-of-law-core': {metadata: typographyXrc, scope: {animationId: 'xi-rule-of-law-core', subject: 'theoretical-law', topic: '05'}},
  'xi-rule-of-law-practice': {metadata: typographyXrp, scope: {animationId: 'xi-rule-of-law-practice', subject: 'theoretical-law', topic: '05'}},
  'fight-defense-diagram': {metadata: typography44, scope: {animationId: 'fight-defense-diagram', subject: 'criminal', topic: '22'}},
  'high-altitude-throwing-diagram': {metadata: typography45, scope: {animationId: 'high-altitude-throwing-diagram', subject: 'criminal', topic: '22'}},
  'influence-intermediary': {metadata: typography46, scope: {animationId: 'influence-intermediary', subject: 'criminal', topic: '23'}},
  'official-intermediary': {metadata: typography47, scope: {animationId: 'official-intermediary', subject: 'criminal', topic: '23'}},
  'demo-archival-dossier': {metadata: typography48, scope: {animationId: 'demo-archival-dossier', subject: 'demo', topic: 'styles'}},
  'demo-constructivist-geometry': {metadata: typography49, scope: {animationId: 'demo-constructivist-geometry', subject: 'demo', topic: 'styles'}},
  'demo-courtroom-blueprint': {metadata: typography50, scope: {animationId: 'demo-courtroom-blueprint', subject: 'demo', topic: 'styles'}},
  'demo-decision-tree': {metadata: typography51, scope: {animationId: 'demo-decision-tree', subject: 'demo', topic: 'styles'}},
  'demo-evidence-board': {metadata: typography52, scope: {animationId: 'demo-evidence-board', subject: 'demo', topic: 'styles'}},
  'demo-ink-annotation': {metadata: typography53, scope: {animationId: 'demo-ink-annotation', subject: 'demo', topic: 'styles'}},
  'demo-isometric-mechanism': {metadata: typography54, scope: {animationId: 'demo-isometric-mechanism', subject: 'demo', topic: 'styles'}},
  'demo-kinetic-typography': {metadata: typography55, scope: {animationId: 'demo-kinetic-typography', subject: 'demo', topic: 'styles'}},
  'demo-newspaper-editorial': {metadata: typography56, scope: {animationId: 'demo-newspaper-editorial', subject: 'demo', topic: 'styles'}},
  'demo-rights-matrix': {metadata: typography57, scope: {animationId: 'demo-rights-matrix', subject: 'demo', topic: 'styles'}},
  'demo-split-screen-comparison': {metadata: typography58, scope: {animationId: 'demo-split-screen-comparison', subject: 'demo', topic: 'styles'}},
  'demo-statute-commentary': {metadata: typography59, scope: {animationId: 'demo-statute-commentary', subject: 'demo', topic: 'styles'}},
  'demo-timeline-chronicle': {metadata: typography60, scope: {animationId: 'demo-timeline-chronicle', subject: 'demo', topic: 'styles'}},
  'demo-transit-map': {metadata: typography61, scope: {animationId: 'demo-transit-map', subject: 'demo', topic: 'styles'}},
  ...COMMERCIAL_LAW_TYPOGRAPHY_CONFIGURATIONS,
};

export const getAnimationTypographyConfiguration = (animationId: string) =>
  ANIMATION_TYPOGRAPHY_CONFIGURATIONS[animationId];

import {COMMERCIAL_LAW_TYPOGRAPHY_CONFIGURATIONS} from './commercial-law-animation-registry';
