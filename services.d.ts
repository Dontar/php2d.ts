/* E:\work\www\MicsyDocSysNormal\app\utils\AdapterMicsy.php */
declare interface IAdapterMicsy {
    authenticate( cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\AdmmoduleService.php */
declare interface IAdmmoduleService {
    getProcTree($group_id, cb: (result: any, e: any) => void, scope?: any): void;
    getAuInfo($srvc_id, cb: (result: any, e: any) => void, scope?: any): void;
    editPrepName($prep_id, $text, cb: (result: any, e: any) => void, scope?: any): void;
    getPrepiskiList($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getDocList($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    setProcedure_Finnished($srvc_id, $prep_id, $doc_id, $date, $text, cb: (result: any, e: any) => void, scope?: any): void;
    setProcedure_Stopped($srvc_id, $prep_id, $doc_id, $date, $text, cb: (result: any, e: any) => void, scope?: any): void;
    restart_Procedure($srvc_id, $prep_id, $doc_id, $date, $text, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\Barcode39.php */
declare interface IBarcode39 {
    draw($filename, cb: (result: any, e: any) => void, scope?: any): void;
    setBarCode($bcode, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\Cal.php */
declare interface ICal {
}


/* E:\work\www\MicsyDocSysNormal\app\utils\ClaimsService.php */
declare interface IDamageRow {
}
declare interface IDamageRowArray {
}
declare interface IImageRow {
}
declare interface IImageRowArray {
}
declare interface IClaimsService {
}
declare interface Imap {
    _checkArguments($arguments, $validParameters, cb: (result: any, e: any) => void, scope?: any): void;
    login($mixed, cb: (result: any, e: any) => void, scope?: any): void;
    listDamages($mixed, cb: (result: any, e: any) => void, scope?: any): void;
    getImages($mixed, cb: (result: any, e: any) => void, scope?: any): void;
    getDocs($mixed, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\ContractsmoduleService.php */
declare interface IContractsmoduleService {
    getOpStructure($parent_id, cb: (result: any, e: any) => void, scope?: any): void;
    addNode($data, $ntype, cb: (result: any, e: any) => void, scope?: any): void;
    addOffer( cb: (result: any, e: any) => void, scope?: any): void;
    makeContractFolder($node_id, $contract_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPreps($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getDocList($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    addOpReg($data, cb: (result: any, e: any) => void, scope?: any): void;
    getOpReg($id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsSpr($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsByGroupId($data, cb: (result: any, e: any) => void, scope?: any): void;
    addReport($parent_reg_id, $report_type, $from_d, $to_d, cb: (result: any, e: any) => void, scope?: any): void;
    getReportDetails($id, cb: (result: any, e: any) => void, scope?: any): void;
    updateReport($data, cb: (result: any, e: any) => void, scope?: any): void;
    getOpReports($reg_id, cb: (result: any, e: any) => void, scope?: any): void;
    getOpRep1Spr($report_type, $fromd, $tod, $reg_id, cb: (result: any, e: any) => void, scope?: any): void;
    getOpRep1SprAll($id, $report_type, $from_d, $to_d, cb: (result: any, e: any) => void, scope?: any): void;
    getOpRepObl1Spr($report_type, $fromd, $tod, $reg_id, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\ContractsService.php */
declare interface IContractsService {
    getContractsList($filter, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getContract($contractId, cb: (result: any, e: any) => void, scope?: any): void;
    addContract($data, cb: (result: any, e: any) => void, scope?: any): void;
    delContract($contractId, cb: (result: any, e: any) => void, scope?: any): void;
    registerDocument($data, cb: (result: any, e: any) => void, scope?: any): void;
    regContract($data, cb: (result: any, e: any) => void, scope?: any): void;
    getContractInfo($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getKontragents($parentId, cb: (result: any, e: any) => void, scope?: any): void;
    getContractsPayments($data, cb: (result: any, e: any) => void, scope?: any): void;
    setContractsMonthPayment($data, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\ContractsymoduleService.php */
declare interface IContractsymoduleService {
    getCoyStructure($parent_id, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\ControllerModel.php */
declare interface IControllerModel {
    setOriginal($target_id, $file, $link_type, $data, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\CredentialsService.php */
declare interface ICredentialsService {
    addCredential($data, cb: (result: any, e: any) => void, scope?: any): void;
    cancelCredential($id, cb: (result: any, e: any) => void, scope?: any): void;
    getCredentialsList($filter, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getCredRightsList( cb: (result: any, e: any) => void, scope?: any): void;
    getCredentialById($id, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\DBService.php */
declare interface IDBService {
}


/* E:\work\www\MicsyDocSysNormal\app\utils\Dokument.php */
declare interface IDokument {
    getDokTree($group_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocTreeRec($parent, cb: (result: any, e: any) => void, scope?: any): void;
    getDocTreeRec2($plik, cb: (result: any, e: any) => void, scope?: any): void;
    proposeVidDocCode($parent_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDok($id, cb: (result: any, e: any) => void, scope?: any): void;
    addDok($dokData, $data, cb: (result: any, e: any) => void, scope?: any): void;
    delDok($vid_id, cb: (result: any, e: any) => void, scope?: any): void;
    getProcedures($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getProceedures($search, cb: (result: any, e: any) => void, scope?: any): void;
    udpateTemplate($vid_id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    getTemplate($vid_id, cb: (result: any, e: any) => void, scope?: any): void;
    getCorrespondentFrom($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getCorrespondentTo($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getStdAction($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getAdditionalRekv($vid_id, cb: (result: any, e: any) => void, scope?: any): void;
    setAdditionalRekv($data, $rekv_id, cb: (result: any, e: any) => void, scope?: any): void;
    delAdditionalRekv($rek_id, cb: (result: any, e: any) => void, scope?: any): void;
    getAdditRekviziti($vid_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateRekvizitiDocs($data, cb: (result: any, e: any) => void, scope?: any): void;
    getAddRekvTemplate($subStrs2, cb: (result: any, e: any) => void, scope?: any): void;
    getLetters( cb: (result: any, e: any) => void, scope?: any): void;
    getPersonalDokTree($group_id, cb: (result: any, e: any) => void, scope?: any): void;
    updatePersonalDokTree($doks, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\EmployeesmoduleService.php */
declare interface IEmployeesmoduleService {
    getEmployeeTree($group_id, cb: (result: any, e: any) => void, scope?: any): void;
    addGroup($groupData, cb: (result: any, e: any) => void, scope?: any): void;
    delGroup($id, cb: (result: any, e: any) => void, scope?: any): void;
    addPosition($group_id, $nkpd_id, $ekda, cb: (result: any, e: any) => void, scope?: any): void;
    delPosition($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    addPerson($id, $kor_id, $action_type, cb: (result: any, e: any) => void, scope?: any): void;
    freePerson($id, $kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getCalendar($month, $year, $from, $to, cb: (result: any, e: any) => void, scope?: any): void;
    editDate($item_type, $id, cb: (result: any, e: any) => void, scope?: any): void;
    getDaysInAMonth( cb: (result: any, e: any) => void, scope?: any): void;
    getWorkInterval($start_date, $interval, cb: (result: any, e: any) => void, scope?: any): void;
    getEmployeeData($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getEkdaList( cb: (result: any, e: any) => void, scope?: any): void;
    editEmployeeData($data, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\generate_md5.php */


/* E:\work\www\MicsyDocSysNormal\app\utils\IagregisterService.php */
declare interface IIagregisterService {
    getCollectives($start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getCollectiveMembers($id, cb: (result: any, e: any) => void, scope?: any): void;
    getZasedanieDocs($start, $limit, $zasedanie_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsInZasedanie($zas_id, cb: (result: any, e: any) => void, scope?: any): void;
    getMeetings($coll_id, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getMeetingsM($id, $place, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getMeetingsD($id, $date, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    addNewCollective($data, cb: (result: any, e: any) => void, scope?: any): void;
    editCollective($id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    addNewZasedanie($data, cb: (result: any, e: any) => void, scope?: any): void;
    getZasedanie($id, $zasedanie_id, cb: (result: any, e: any) => void, scope?: any): void;
    EditZasedanie($meeting_id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    getCollectiveM($c_name, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    addDocsToZasedanie($zas_id, $docs, cb: (result: any, e: any) => void, scope?: any): void;
    getKorespondentsData($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    addDecisionDoc($kor_id, $cert_id, $zasedanie_id, $doc_id, $prep_id, $system_field, $cparams, $comments, $dos_id, $predstavil_id, cb: (result: any, e: any) => void, scope?: any): void;
    addDecisionDocFiz($kor_id, $cert_id, $zasedanie_id, $doc_id, $prep_id, $system_field, $cparams, $comments, cb: (result: any, e: any) => void, scope?: any): void;
    getInfoDocs($start, $limit, $zasedanie_id, cb: (result: any, e: any) => void, scope?: any): void;
    getInfoDocsDenait($start, $limit, $zasedanie_id, cb: (result: any, e: any) => void, scope?: any): void;
    getCertificatesDoc($start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getActivites($kor_id, $cert_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateCert($prep_id, $kor_id, $cert_id, $is_material, $razdel, $doc_vid_id, $doc_type, $doc_priotity, $doc_security, $doc_delivery, cb: (result: any, e: any) => void, scope?: any): void;
    setUrLice( cb: (result: any, e: any) => void, scope?: any): void;
    setFizLica($start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    setRegisterFizSherch($number, $name, $egn, cb: (result: any, e: any) => void, scope?: any): void;
    setRegisterUrSherch($number, $name, $egn, cb: (result: any, e: any) => void, scope?: any): void;
    upZasedania($zasedania_id, $doc_id, $prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    udostoverenie($kor_id, $cert_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocs($start, $limit, $kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDostavchik( cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\JalbimoduleService.php */
declare interface IJalbimoduleService {
    addJalba($data, $data_lica, $data_violations, cb: (result: any, e: any) => void, scope?: any): void;
    getPrepList($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getJalbaInfo($jalba_id, cb: (result: any, e: any) => void, scope?: any): void;
    getViolationsListForJalba($jalba_id, cb: (result: any, e: any) => void, scope?: any): void;
    getLicaListForJalba($jalba_id, cb: (result: any, e: any) => void, scope?: any): void;
    addViolationsAndLica($jalba_id, $prep_id, $data, $data_violations, $data_lica, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsInDossier($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsForRazpredelenie($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsInProcess($data, cb: (result: any, e: any) => void, scope?: any): void;
    setJalbaResult($data, cb: (result: any, e: any) => void, scope?: any): void;
    getJalbaResult($jresult_id, cb: (result: any, e: any) => void, scope?: any): void;
    getResultsList( cb: (result: any, e: any) => void, scope?: any): void;
    setActionsList($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    setFinalResultsList($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    setJalbaFinish($jalba_id, $jresult_id, $date, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\KontragentService.php */
declare interface IKontragentService {
    getReportDocId( cb: (result: any, e: any) => void, scope?: any): void;
    getPropDocId( cb: (result: any, e: any) => void, scope?: any): void;
    getTaskDocId( cb: (result: any, e: any) => void, scope?: any): void;
    getKontragentsTree($id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsForKor($kor_name, cb: (result: any, e: any) => void, scope?: any): void;
    getMeetingInfo($task_id, cb: (result: any, e: any) => void, scope?: any): void;
    setMeetingInfo($task_id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    getKontragentTasks($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getKontragentTasksAll($kor_name, cb: (result: any, e: any) => void, scope?: any): void;
    updateAddData($kor_id, $data, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\MailService.php */
declare interface IMailService {
    openssl_to_timestamp($in, cb: (result: any, e: any) => void, scope?: any): void;
    getMail($params, cb: (result: any, e: any) => void, scope?: any): void;
    getMainGroup( cb: (result: any, e: any) => void, scope?: any): void;
    findKorByEmail($mail, cb: (result: any, e: any) => void, scope?: any): void;
    findKorById($data, cb: (result: any, e: any) => void, scope?: any): void;
    regNewKor($email, cb: (result: any, e: any) => void, scope?: any): void;
    getEmails($start, $limit, $search, cb: (result: any, e: any) => void, scope?: any): void;
    getMessage($msg_id, cb: (result: any, e: any) => void, scope?: any): void;
    getMailConfig($data, cb: (result: any, e: any) => void, scope?: any): void;
    createMailConfig($data, cb: (result: any, e: any) => void, scope?: any): void;
    updateMailConfig($data, cb: (result: any, e: any) => void, scope?: any): void;
    removeMailConfig($data, cb: (result: any, e: any) => void, scope?: any): void;
    regMail($data, cb: (result: any, e: any) => void, scope?: any): void;
    sendMail($data, cb: (result: any, e: any) => void, scope?: any): void;
    sendMail2($data, cb: (result: any, e: any) => void, scope?: any): void;
    regSendDoc($data, cb: (result: any, e: any) => void, scope?: any): void;
    constructMailBody($korId, $docId, $body, cb: (result: any, e: any) => void, scope?: any): void;
    array_implode($glue, $separator, $array, cb: (result: any, e: any) => void, scope?: any): void;
    setCurrentAccount($id, cb: (result: any, e: any) => void, scope?: any): void;
    getAttachment($msgId, $fileName, cb: (result: any, e: any) => void, scope?: any): void;
    getMailContentForOriginal($mId, cb: (result: any, e: any) => void, scope?: any): void;
    checkKorMails($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getMessageFromFile($filename, cb: (result: any, e: any) => void, scope?: any): void;
    getEmailName($message, $from, cb: (result: any, e: any) => void, scope?: any): void;
    decode_mime_string($input, $fallback, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\MaterialsService.php */
declare interface IMaterialsService {
    getMaterials_List($lastDays, $from, $to, $start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getMaterialsForPodpis($from, $to, $start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getMaterial_Data( cb: (result: any, e: any) => void, scope?: any): void;
    updateMaterial_Data( cb: (result: any, e: any) => void, scope?: any): void;
    getMaterial_Originals( cb: (result: any, e: any) => void, scope?: any): void;
    updateMaterial_Originals( cb: (result: any, e: any) => void, scope?: any): void;
    setOformiane_Done( cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\MicsyCharset.php */
declare interface IMicsyCharset {
    new_detect($string, $pattern_size, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\MicsyGlobalEventsListener.php */
declare interface IMicsyGlobalEventsListener {
    preTransactionCommit($event, cb: (result: any, e: any) => void, scope?: any): void;
    postTransactionCommit($event, cb: (result: any, e: any) => void, scope?: any): void;
    preTransactionRollback($event, cb: (result: any, e: any) => void, scope?: any): void;
    postTransactionRollback($event, cb: (result: any, e: any) => void, scope?: any): void;
    preTransactionBegin($event, cb: (result: any, e: any) => void, scope?: any): void;
    postTransactionBegin($event, cb: (result: any, e: any) => void, scope?: any): void;
    postConnect($event, cb: (result: any, e: any) => void, scope?: any): void;
    preConnect($event, cb: (result: any, e: any) => void, scope?: any): void;
    preQuery($event, cb: (result: any, e: any) => void, scope?: any): void;
    postQuery($event, cb: (result: any, e: any) => void, scope?: any): void;
    prePrepare($event, cb: (result: any, e: any) => void, scope?: any): void;
    postPrepare($event, cb: (result: any, e: any) => void, scope?: any): void;
    preExec($event, cb: (result: any, e: any) => void, scope?: any): void;
    postExec($event, cb: (result: any, e: any) => void, scope?: any): void;
    preError($event, cb: (result: any, e: any) => void, scope?: any): void;
    postError($event, cb: (result: any, e: any) => void, scope?: any): void;
    preFetch($event, cb: (result: any, e: any) => void, scope?: any): void;
    postFetch($event, cb: (result: any, e: any) => void, scope?: any): void;
    preFetchAll($event, cb: (result: any, e: any) => void, scope?: any): void;
    postFetchAll($event, cb: (result: any, e: any) => void, scope?: any): void;
    preStmtExecute($event, cb: (result: any, e: any) => void, scope?: any): void;
    postStmtExecute($event, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\MicsyGlobalListener.php */
declare interface IMicsyGlobalListener {
    setOption($name, $value, cb: (result: any, e: any) => void, scope?: any): void;
    getOptions( cb: (result: any, e: any) => void, scope?: any): void;
    getOption($name, cb: (result: any, e: any) => void, scope?: any): void;
    preSerialize($event, cb: (result: any, e: any) => void, scope?: any): void;
    postSerialize($event, cb: (result: any, e: any) => void, scope?: any): void;
    preUnserialize($event, cb: (result: any, e: any) => void, scope?: any): void;
    postUnserialize($event, cb: (result: any, e: any) => void, scope?: any): void;
    preSave($event, cb: (result: any, e: any) => void, scope?: any): void;
    postSave($event, cb: (result: any, e: any) => void, scope?: any): void;
    preDelete($event, cb: (result: any, e: any) => void, scope?: any): void;
    postDelete($event, cb: (result: any, e: any) => void, scope?: any): void;
    preUpdate($event, cb: (result: any, e: any) => void, scope?: any): void;
    postUpdate($event, cb: (result: any, e: any) => void, scope?: any): void;
    preInsert($event, cb: (result: any, e: any) => void, scope?: any): void;
    postInsert($event, cb: (result: any, e: any) => void, scope?: any): void;
    preHydrate($event, cb: (result: any, e: any) => void, scope?: any): void;
    postHydrate($event, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\MicsyTnefDecoder.php */
declare interface IMicsyTnefDecoder {
    decompress($data, $params, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\MicsyUtils.php */
declare interface IMicsyUtils {
    getFileExt($file, cb: (result: any, e: any) => void, scope?: any): void;
    isValidBulstat($s, cb: (result: any, e: any) => void, scope?: any): void;
    isValidEGN($egn, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\MIMSService.php */
declare interface IMIMSService {
    SingleCharge($auth, $InputNumber, $kor, $adm_id, $AdditionInfo, cb: (result: any, e: any) => void, scope?: any): void;
    IsWebServiceEnabled( cb: (result: any, e: any) => void, scope?: any): void;
    CreateUser($userName, $password, $fullName, $email, cb: (result: any, e: any) => void, scope?: any): void;
    ChangePass($userName, $password, cb: (result: any, e: any) => void, scope?: any): void;
    toXml($data, cb: (result: any, e: any) => void, scope?: any): void;
    AddContact($xml, cb: (result: any, e: any) => void, scope?: any): void;
    SendAddress($korId, $xmlData, cb: (result: any, e: any) => void, scope?: any): void;
    DeleteAddress($id, cb: (result: any, e: any) => void, scope?: any): void;
    AddTaks($name, $parent_id, cb: (result: any, e: any) => void, scope?: any): void;
    UpdateTaks($id, $name, $active, cb: (result: any, e: any) => void, scope?: any): void;
    SendArea($area_name, $area_code, $parent_code, $id_micsy, $isStreet, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\ModuleConfig.php */
declare interface IModuleConfig {
    getModules( cb: (result: any, e: any) => void, scope?: any): void;
    updateModules($data, cb: (result: any, e: any) => void, scope?: any): void;
    autoSaveModule($module, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\NomDela.php */
declare interface INomDela {
    finnishYear( cb: (result: any, e: any) => void, scope?: any): void;
    classDocIntoFile($doc_id, $delo_id, $prep_id, $date, cb: (result: any, e: any) => void, scope?: any): void;
    classAllDocsIntoFile($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    classAllDocsIntoNewFile($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    giveDoc($data, cb: (result: any, e: any) => void, scope?: any): void;
    returnDoc($d_id, $date, cb: (result: any, e: any) => void, scope?: any): void;
    getBorrowHistory($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDeloDocs($delo_id, cb: (result: any, e: any) => void, scope?: any): void;
    proposeIndex($delo_group_id, $item_type, cb: (result: any, e: any) => void, scope?: any): void;
    getDelaTree($delo_group_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDeloInfo($delo_id, cb: (result: any, e: any) => void, scope?: any): void;
    delDelo($delo_id, cb: (result: any, e: any) => void, scope?: any): void;
    checkRazdel($delo_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateDeloInfo($delo_id, cb: (result: any, e: any) => void, scope?: any): void;
    addRazdel($data, cb: (result: any, e: any) => void, scope?: any): void;
    addSubRazdel($data, cb: (result: any, e: any) => void, scope?: any): void;
    addDelo($data, cb: (result: any, e: any) => void, scope?: any): void;
    addVolume($delo_id, cb: (result: any, e: any) => void, scope?: any): void;
    giveDocument($doc_id, $delo_id, $prep_id, $who_takes, $text, cb: (result: any, e: any) => void, scope?: any): void;
    takeDocument($doc_id, $prep_id, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\OnlinemoduleService.php */
declare interface IOnlinemoduleService {
    getPreps($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getDocList($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsSpr($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsByGroupId($data, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\OpmoduleService.php */
declare interface IOpmoduleService {
    getOpStructure($parent_id, cb: (result: any, e: any) => void, scope?: any): void;
    addNode($data, $ntype, cb: (result: any, e: any) => void, scope?: any): void;
    makeContractFolder($node_id, $contract_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPreps($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getDocList($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    addOpReg($data, cb: (result: any, e: any) => void, scope?: any): void;
    getOpReg($id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsSpr($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsByGroupId($data, cb: (result: any, e: any) => void, scope?: any): void;
    addReport($parent_reg_id, $report_type, $from_d, $to_d, cb: (result: any, e: any) => void, scope?: any): void;
    getReportDetails($id, cb: (result: any, e: any) => void, scope?: any): void;
    updateReport($data, cb: (result: any, e: any) => void, scope?: any): void;
    getOpReports($reg_id, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getOpRep1Spr($report_type, $fromd, $tod, $reg_id, cb: (result: any, e: any) => void, scope?: any): void;
    getOpRep1SprAll($id, $report_type, $from_d, $to_d, cb: (result: any, e: any) => void, scope?: any): void;
    getOpRepObl1Spr($report_type, $fromd, $tod, $reg_id, cb: (result: any, e: any) => void, scope?: any): void;
    getOpRep1SprSF($report_type, $fromd, $tod, $reg_id, $sfield, cb: (result: any, e: any) => void, scope?: any): void;
    getOpRepObl1SprSF($report_type, $fromd, $tod, $reg_id, $sfield, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\OrainsService.php */
declare interface IBootstrapStub {
    getOption($opt, cb: (result: any, e: any) => void, scope?: any): void;
}
declare interface IOrainsService {
    getPolicies( cb: (result: any, e: any) => void, scope?: any): void;
    getClaims( cb: (result: any, e: any) => void, scope?: any): void;
    getClaimsIMS( cb: (result: any, e: any) => void, scope?: any): void;
    getPolicieInfo($policyNum, cb: (result: any, e: any) => void, scope?: any): void;
    getClaimInfo($claimNum, cb: (result: any, e: any) => void, scope?: any): void;
    getClaimInfoIMS($claimNum, cb: (result: any, e: any) => void, scope?: any): void;
    registerPolicy($policyNum, cb: (result: any, e: any) => void, scope?: any): void;
    registerCaim($claimNum, cb: (result: any, e: any) => void, scope?: any): void;
    fullAuto($from, $to, $start, $onlyPolicies, $byRegDate, cb: (result: any, e: any) => void, scope?: any): void;
    fixNoDoc( cb: (result: any, e: any) => void, scope?: any): void;
    registerPolicyStela($policyNum, cb: (result: any, e: any) => void, scope?: any): void;
    kkor($kor, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\OriginalsService.php */
declare interface IOriginalsService {
}


/* E:\work\www\MicsyDocSysNormal\app\utils\PaymentsService.php */
declare interface IPaymentsService {
    getClaimsPayment($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getPaymentPlan($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getPaymentReport($filter, cb: (result: any, e: any) => void, scope?: any): void;
    addClaim($claimNUmber, cb: (result: any, e: any) => void, scope?: any): void;
    updateClaim($data, cb: (result: any, e: any) => void, scope?: any): void;
    getPayments($claimId, cb: (result: any, e: any) => void, scope?: any): void;
    setPayed($payId, $date, cb: (result: any, e: any) => void, scope?: any): void;
    createPayment($data, cb: (result: any, e: any) => void, scope?: any): void;
    updatePayment($data, cb: (result: any, e: any) => void, scope?: any): void;
    removePayment($id, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\PluginServiceModel.php */
declare interface IPluginServiceModel {
    addNode($data, $ntype, cb: (result: any, e: any) => void, scope?: any): void;
    getPreps($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getOpRegCodes($reg_type, cb: (result: any, e: any) => void, scope?: any): void;
    getDocList($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    addOpReg($data, cb: (result: any, e: any) => void, scope?: any): void;
    getOpReg($id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsSpr($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsByGroupId($data, cb: (result: any, e: any) => void, scope?: any): void;
    addReport($parent_reg_id, $report_type, $from_d, $to_d, cb: (result: any, e: any) => void, scope?: any): void;
    getReportDetails($id, cb: (result: any, e: any) => void, scope?: any): void;
    updateReport($data, cb: (result: any, e: any) => void, scope?: any): void;
    getOpReports($reg_id, cb: (result: any, e: any) => void, scope?: any): void;
    getOpRep1Spr($report_type, $fromd, $tod, $reg_id, cb: (result: any, e: any) => void, scope?: any): void;
    getOpRep1SprAll($id, $report_type, $from_d, $to_d, cb: (result: any, e: any) => void, scope?: any): void;
    getOpRepObl1Spr($report_type, $fromd, $tod, $reg_id, cb: (result: any, e: any) => void, scope?: any): void;
    setVruchvane($date, $doc_id, $prep_id, $kor_id, $predal_kor_id, $comments, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\PolicyEventsListener.php */
declare interface IPolicyEventsListener {
    preTransactionCommit($event, cb: (result: any, e: any) => void, scope?: any): void;
    postTransactionCommit($event, cb: (result: any, e: any) => void, scope?: any): void;
    preTransactionRollback($event, cb: (result: any, e: any) => void, scope?: any): void;
    postTransactionRollback($event, cb: (result: any, e: any) => void, scope?: any): void;
    preTransactionBegin($event, cb: (result: any, e: any) => void, scope?: any): void;
    postTransactionBegin($event, cb: (result: any, e: any) => void, scope?: any): void;
    postConnect($event, cb: (result: any, e: any) => void, scope?: any): void;
    preConnect($event, cb: (result: any, e: any) => void, scope?: any): void;
    preQuery($event, cb: (result: any, e: any) => void, scope?: any): void;
    postQuery($event, cb: (result: any, e: any) => void, scope?: any): void;
    prePrepare($event, cb: (result: any, e: any) => void, scope?: any): void;
    postPrepare($event, cb: (result: any, e: any) => void, scope?: any): void;
    preExec($event, cb: (result: any, e: any) => void, scope?: any): void;
    postExec($event, cb: (result: any, e: any) => void, scope?: any): void;
    preError($event, cb: (result: any, e: any) => void, scope?: any): void;
    postError($event, cb: (result: any, e: any) => void, scope?: any): void;
    preFetch($event, cb: (result: any, e: any) => void, scope?: any): void;
    postFetch($event, cb: (result: any, e: any) => void, scope?: any): void;
    preFetchAll($event, cb: (result: any, e: any) => void, scope?: any): void;
    postFetchAll($event, cb: (result: any, e: any) => void, scope?: any): void;
    preStmtExecute($event, cb: (result: any, e: any) => void, scope?: any): void;
    postStmtExecute($event, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\PolicyRecordListener.php */
declare interface IPolicyRecordListener {
    setOption($name, $value, cb: (result: any, e: any) => void, scope?: any): void;
    getOptions( cb: (result: any, e: any) => void, scope?: any): void;
    getOption($name, cb: (result: any, e: any) => void, scope?: any): void;
    preSerialize($event, cb: (result: any, e: any) => void, scope?: any): void;
    postSerialize($event, cb: (result: any, e: any) => void, scope?: any): void;
    preUnserialize($event, cb: (result: any, e: any) => void, scope?: any): void;
    postUnserialize($event, cb: (result: any, e: any) => void, scope?: any): void;
    preSave($event, cb: (result: any, e: any) => void, scope?: any): void;
    postSave($event, cb: (result: any, e: any) => void, scope?: any): void;
    preDelete($event, cb: (result: any, e: any) => void, scope?: any): void;
    postDelete($event, cb: (result: any, e: any) => void, scope?: any): void;
    preUpdate($event, cb: (result: any, e: any) => void, scope?: any): void;
    postUpdate($event, cb: (result: any, e: any) => void, scope?: any): void;
    preInsert($event, cb: (result: any, e: any) => void, scope?: any): void;
    postInsert($event, cb: (result: any, e: any) => void, scope?: any): void;
    preHydrate($event, cb: (result: any, e: any) => void, scope?: any): void;
    postHydrate($event, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\PracticesService.php */
declare interface IPracticesService {
}


/* E:\work\www\MicsyDocSysNormal\app\utils\PrivateMessageService.php */
declare interface IPrivateMessageService {
    getMessages($data, cb: (result: any, e: any) => void, scope?: any): void;
    sendMessage($data, cb: (result: any, e: any) => void, scope?: any): void;
    deleteMessage( cb: (result: any, e: any) => void, scope?: any): void;
    getBuddiesStatus( cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\Procedure.php */
declare interface IProcedure {
    getProcTree($group_id, cb: (result: any, e: any) => void, scope?: any): void;
    getStages_Tree($proc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getTasksTree($proc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getProc($id, cb: (result: any, e: any) => void, scope?: any): void;
    getStagesTree($proc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getStage($id, cb: (result: any, e: any) => void, scope?: any): void;
    getSubStage($id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocuments($data, cb: (result: any, e: any) => void, scope?: any): void;
    addStage($stageData, cb: (result: any, e: any) => void, scope?: any): void;
    addService($serviceData, cb: (result: any, e: any) => void, scope?: any): void;
    addStageDoc($stageDocData, cb: (result: any, e: any) => void, scope?: any): void;
    addTaskDoc($stageDocData, cb: (result: any, e: any) => void, scope?: any): void;
    changeStageDoc($stageDocData, cb: (result: any, e: any) => void, scope?: any): void;
    addProcGroup($groupData, cb: (result: any, e: any) => void, scope?: any): void;
    delStageDoc($stageDocData, cb: (result: any, e: any) => void, scope?: any): void;
    delStage($stageData, cb: (result: any, e: any) => void, scope?: any): void;
    delService($serviceData, cb: (result: any, e: any) => void, scope?: any): void;
    delProcGroup($groupData, cb: (result: any, e: any) => void, scope?: any): void;
    delSubStage($stageData, cb: (result: any, e: any) => void, scope?: any): void;
    getAllStages($temp, cb: (result: any, e: any) => void, scope?: any): void;
    getAllResults($temp, cb: (result: any, e: any) => void, scope?: any): void;
    addResult($data, cb: (result: any, e: any) => void, scope?: any): void;
    delResult($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateResult($data, cb: (result: any, e: any) => void, scope?: any): void;
    getStagesProcedureTree($proc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getSubStageFromTree($id, cb: (result: any, e: any) => void, scope?: any): void;
    getStageFromeTree($id, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\ProverkimoduleService.php */
declare interface IProverkimoduleService {
    getPrmStructure($parent_id, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\PublicErrandsService.php */
declare interface IPublicErrandsService {
    pipi( cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\StatisticsService.php */
declare interface IStatisticsService {
    getTimeLoad($data, cb: (result: any, e: any) => void, scope?: any): void;
    getRegistrationStatistics1($data, cb: (result: any, e: any) => void, scope?: any): void;
    getRegistrationStatistics2($data, cb: (result: any, e: any) => void, scope?: any): void;
    getUsersLoad($data, cb: (result: any, e: any) => void, scope?: any): void;
    getByDelivery($data, cb: (result: any, e: any) => void, scope?: any): void;
    getByVidDoc($data, cb: (result: any, e: any) => void, scope?: any): void;
    getAuTimeLine($id, cb: (result: any, e: any) => void, scope?: any): void;
    getAuDuration($id, $start_date, cb: (result: any, e: any) => void, scope?: any): void;
    getTasksStatistics($data, cb: (result: any, e: any) => void, scope?: any): void;
    getRegisteredDocuments($data, cb: (result: any, e: any) => void, scope?: any): void;
    getUserActivity($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDelaStatistic($data, cb: (result: any, e: any) => void, scope?: any): void;
    getTaskStatistics($data, cb: (result: any, e: any) => void, scope?: any): void;
    getTaskStatisticsPieData($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDocBandStatistics($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDocBandStatisticsPieData($data, cb: (result: any, e: any) => void, scope?: any): void;
    getTimeLoadMats($data, cb: (result: any, e: any) => void, scope?: any): void;
    getUsersLoadMats($data, cb: (result: any, e: any) => void, scope?: any): void;
    getByDeliveryMats($data, cb: (result: any, e: any) => void, scope?: any): void;
    getByVidDocMats($data, cb: (result: any, e: any) => void, scope?: any): void;
    getRegistrationStatistics1Mats($data, cb: (result: any, e: any) => void, scope?: any): void;
    getRegistrationStatistics2Mats($data, cb: (result: any, e: any) => void, scope?: any): void;
    getTasksStat1($data, cb: (result: any, e: any) => void, scope?: any): void;
    getTasksStat1PieData($data, cb: (result: any, e: any) => void, scope?: any): void;
    getBigStatistics($fromDate, $toDate, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\TaskSpravka.php */
declare interface ITaskSpravkaService {
    addService($data, cb: (result: any, e: any) => void, scope?: any): void;
    updateService($srvc_id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    delService($srvc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getSrvcList($temp, cb: (result: any, e: any) => void, scope?: any): void;
    regSrvc($supl_id, $srvc, cb: (result: any, e: any) => void, scope?: any): void;
    delSrvc($item_id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    updateSrvc($item_id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    getKors($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getSrvc($supl_id, cb: (result: any, e: any) => void, scope?: any): void;
    getSrvcIds($supl_id, $zaiav_id, cb: (result: any, e: any) => void, scope?: any): void;
    getAspAdditional($zaiav_id, cb: (result: any, e: any) => void, scope?: any): void;
    addKorSrvc($data, cb: (result: any, e: any) => void, scope?: any): void;
    addCert($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    getSprParams($spr_params, cb: (result: any, e: any) => void, scope?: any): void;
    getKorsSpr($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getSrvcSpr($supl_id, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\TaxmoduleService.php */
declare interface ITaxmoduleService {
    getTaxStructure($parent_id, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\TelmoduleService.php */
declare interface ITelmoduleService {
}


/* E:\work\www\MicsyDocSysNormal\app\utils\UsersCM.php */
declare interface IUsersCM {
    getDluznosti2($a, cb: (result: any, e: any) => void, scope?: any): void;
    getPositions( cb: (result: any, e: any) => void, scope?: any): void;
    getUsers($a, cb: (result: any, e: any) => void, scope?: any): void;
    getPosPosAcc($pos_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPosDocAcc($pos_id, cb: (result: any, e: any) => void, scope?: any): void;
    getUserPosAcc($kor_id, $pos_id, cb: (result: any, e: any) => void, scope?: any): void;
    getOPDocRegisters($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getUserDocAcc($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getUserWorkAsAcc($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getUserCanDirectTo($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getUserCanPoseTaskTo($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPos($pos_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDluz($dluz_id, cb: (result: any, e: any) => void, scope?: any): void;
    getUser($user_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDluznostiEIK($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getPosSel($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getUsersSel($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getDluSel($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getDluznosti($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getPosAcc($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getDluznostiList($query, cb: (result: any, e: any) => void, scope?: any): void;
    updateDluznostiList($data, cb: (result: any, e: any) => void, scope?: any): void;
    addPosition($posData, cb: (result: any, e: any) => void, scope?: any): void;
    getUsersCount( cb: (result: any, e: any) => void, scope?: any): void;
    addUser($userData, cb: (result: any, e: any) => void, scope?: any): void;
    setReadAllRegisters($user, cb: (result: any, e: any) => void, scope?: any): void;
    setWriteAllRegisters($user, cb: (result: any, e: any) => void, scope?: any): void;
    checkUserName($user_id, $username, cb: (result: any, e: any) => void, scope?: any): void;
    deleteUser($ids, cb: (result: any, e: any) => void, scope?: any): void;
    deleteUserName($id, cb: (result: any, e: any) => void, scope?: any): void;
    getPosList( cb: (result: any, e: any) => void, scope?: any): void;
    addPosInList( cb: (result: any, e: any) => void, scope?: any): void;
    editPosInList( cb: (result: any, e: any) => void, scope?: any): void;
    getUserRightsList( cb: (result: any, e: any) => void, scope?: any): void;
    addPosInKorTree( cb: (result: any, e: any) => void, scope?: any): void;
    getCorByGroupId($group_id, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getUserByKorId($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    UserHasRight($korid, $rightid, cb: (result: any, e: any) => void, scope?: any): void;
    hasRight($rightid, cb: (result: any, e: any) => void, scope?: any): void;
    tryHasRight($rightId, cb: (result: any, e: any) => void, scope?: any): void;
    hasDrRight($docreg, cb: (result: any, e: any) => void, scope?: any): void;
    hasRegisterRight($reg_id, cb: (result: any, e: any) => void, scope?: any): void;
    getUsersLog($data, cb: (result: any, e: any) => void, scope?: any): void;
    getUsersList($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getUsersListView( cb: (result: any, e: any) => void, scope?: any): void;
    setOrgToUser($usr_id, $org_id, cb: (result: any, e: any) => void, scope?: any): void;
    DocsTransfer($from_who, $to_who, cb: (result: any, e: any) => void, scope?: any): void;
    getRightsList($query, cb: (result: any, e: any) => void, scope?: any): void;
    getPositionsAndRightsList( cb: (result: any, e: any) => void, scope?: any): void;
    getRightsListC( cb: (result: any, e: any) => void, scope?: any): void;
    getUsersAndRightsList( cb: (result: any, e: any) => void, scope?: any): void;
    getDocRegsRights( cb: (result: any, e: any) => void, scope?: any): void;
    getVidoveDocsList( cb: (result: any, e: any) => void, scope?: any): void;
    getAdmSrvcsList( cb: (result: any, e: any) => void, scope?: any): void;
    getAdmStagesList( cb: (result: any, e: any) => void, scope?: any): void;
    getAdmDocsList( cb: (result: any, e: any) => void, scope?: any): void;
    UserChangePass($pass, cb: (result: any, e: any) => void, scope?: any): void;
    checkSetting($id, cb: (result: any, e: any) => void, scope?: any): void;
    getSetting($id, cb: (result: any, e: any) => void, scope?: any): void;
    getModuleLink($m, cb: (result: any, e: any) => void, scope?: any): void;
    getNkpdPosSel($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getNkpd($id, cb: (result: any, e: any) => void, scope?: any): void;
    getPersonalUserSettings($settings, cb: (result: any, e: any) => void, scope?: any): void;
    updatePersonalUserSettings($settings, cb: (result: any, e: any) => void, scope?: any): void;
    addTaskGroups($data, cb: (result: any, e: any) => void, scope?: any): void;
    getTaskGroupItemId( cb: (result: any, e: any) => void, scope?: any): void;
    delTasksGroup($kor_id, $group_id, cb: (result: any, e: any) => void, scope?: any): void;
    delTasksGroupParts($kors, cb: (result: any, e: any) => void, scope?: any): void;
    addTaskGroupParticipants($data, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\UsersService.php */
declare interface IUsersService {
    getUsersListView($showAll, cb: (result: any, e: any) => void, scope?: any): void;
    getUserInfo($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    addUser($userData, cb: (result: any, e: any) => void, scope?: any): void;
    delUser($usr_id, cb: (result: any, e: any) => void, scope?: any): void;
    getOPDocRegisters($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getUserCanDirectTo($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getUserCanPoseTaskTo($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getUserWorkAsAcc($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getUserDocAcc($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getNkpdPosSel($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getDluSel($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    addPosition($posData, cb: (result: any, e: any) => void, scope?: any): void;
    delPosition($pos, cb: (result: any, e: any) => void, scope?: any): void;
    getPos($pos_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPosSel($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getPosRegistersRights($pos_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPosDocRights($pos_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPosRights($pos_id, cb: (result: any, e: any) => void, scope?: any): void;
    addUpdateZam($data, cb: (result: any, e: any) => void, scope?: any): void;
    delZam($data, cb: (result: any, e: any) => void, scope?: any): void;
    addUpdateGroup($data, cb: (result: any, e: any) => void, scope?: any): void;
    addUpdateKorGroup($data, cb: (result: any, e: any) => void, scope?: any): void;
    delKorGroup($data, cb: (result: any, e: any) => void, scope?: any): void;
    delFreeKor($data, cb: (result: any, e: any) => void, scope?: any): void;
    addUpdateFreeKor($data, cb: (result: any, e: any) => void, scope?: any): void;
    getOrgStructure( cb: (result: any, e: any) => void, scope?: any): void;
    getFreeKorespondents( cb: (result: any, e: any) => void, scope?: any): void;
    getUsersLog($data, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getZamHistory($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getZamLabel( cb: (result: any, e: any) => void, scope?: any): void;
    getNkpdTree($filter, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\Violations.php */
declare interface IViolations {
    getViolationsList( cb: (result: any, e: any) => void, scope?: any): void;
    getProcTree($group_id, cb: (result: any, e: any) => void, scope?: any): void;
    getStages_Tree($proc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getTasksTree($proc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getProc($id, cb: (result: any, e: any) => void, scope?: any): void;
    getStagesTree($proc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getStage($id, cb: (result: any, e: any) => void, scope?: any): void;
    getSubStage($id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocuments($stage_id, cb: (result: any, e: any) => void, scope?: any): void;
    addStage($stageData, cb: (result: any, e: any) => void, scope?: any): void;
    addService($serviceData, cb: (result: any, e: any) => void, scope?: any): void;
    addStageDoc($stageDocData, cb: (result: any, e: any) => void, scope?: any): void;
    changeStageDoc($stageDocData, cb: (result: any, e: any) => void, scope?: any): void;
    addProcGroup($groupData, cb: (result: any, e: any) => void, scope?: any): void;
    delStageDoc($stageDocData, cb: (result: any, e: any) => void, scope?: any): void;
    delStage($stageData, cb: (result: any, e: any) => void, scope?: any): void;
    delService($serviceData, cb: (result: any, e: any) => void, scope?: any): void;
    delProcGroup($groupData, cb: (result: any, e: any) => void, scope?: any): void;
    delSubStage($stageData, cb: (result: any, e: any) => void, scope?: any): void;
    getAllStages($temp, cb: (result: any, e: any) => void, scope?: any): void;
    getAllResults($temp, cb: (result: any, e: any) => void, scope?: any): void;
    addResult($data, cb: (result: any, e: any) => void, scope?: any): void;
    delResult($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateResult($data, cb: (result: any, e: any) => void, scope?: any): void;
    getStagesProcedureTree($proc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getSubStageFromTree($id, cb: (result: any, e: any) => void, scope?: any): void;
    getStageFromeTree($id, cb: (result: any, e: any) => void, scope?: any): void;
    addJalba($data, $data_lica, $data_violations, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\ZaporimoduleService.php */
declare interface IZaporimoduleService {
    addZaporMsg($data, cb: (result: any, e: any) => void, scope?: any): void;
    getPrepList($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getDocInfo($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    setAsClient($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    setAsNotClient($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsForClients($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsForNotClients($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    addOpis($docs, $from, $to, $comments, $opis_type, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsForExpedition($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsExpeditedSofia($temp, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsExpeditedProvince($temp, cb: (result: any, e: any) => void, scope?: any): void;
    DocForExpSofia($docs, cb: (result: any, e: any) => void, scope?: any): void;
    DocForExpProvince($docs, cb: (result: any, e: any) => void, scope?: any): void;
    addNewOpisSofia($branch, $smetka, $docs, cb: (result: any, e: any) => void, scope?: any): void;
    addNewOpisProvince($branch, $smetka, $docs, cb: (result: any, e: any) => void, scope?: any): void;
    updateDocsProvince($data, cb: (result: any, e: any) => void, scope?: any): void;
    updateDocsSofia($data, cb: (result: any, e: any) => void, scope?: any): void;
    getUsersLoad($data, cb: (result: any, e: any) => void, scope?: any): void;
    getOpisiList($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsInOpis($opis_doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    setExpeditionProvince($docs, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\ZasedaniaLiteService.php */
declare interface IZasedaniaLiteService {
    getAllZasedania($query, $from, $to, cb: (result: any, e: any) => void, scope?: any): void;
    delOriginal($id, cb: (result: any, e: any) => void, scope?: any): void;
    getOriginals($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateZasedanie($data, cb: (result: any, e: any) => void, scope?: any): void;
    registerDoc($data, cb: (result: any, e: any) => void, scope?: any): void;
    getSastav( cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\ZasedaniaService.php */
declare interface IZasedaniaService {
    getZasRegisters($temp, cb: (result: any, e: any) => void, scope?: any): void;
    getCollectives($start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    addNewCollective($data, cb: (result: any, e: any) => void, scope?: any): void;
    editCollective($id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    getCollectiveMembers($id, cb: (result: any, e: any) => void, scope?: any): void;
    getMeetings($coll_id, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    addNewZasedanie($data, cb: (result: any, e: any) => void, scope?: any): void;
    updateZasedanie($data, cb: (result: any, e: any) => void, scope?: any): void;
    addDocsToZasedanie($zas_id, $docs, cb: (result: any, e: any) => void, scope?: any): void;
    removeDocFromZasesanie($docs, cb: (result: any, e: any) => void, scope?: any): void;
    addPrepToZasedanie($zas_id, $prep_id, $docs, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsInZasedanie($zas_id, cb: (result: any, e: any) => void, scope?: any): void;
    getZasedanieDocs($start, $limit, $zasedanie_id, cb: (result: any, e: any) => void, scope?: any): void;
    getCollectiveM($c_name, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getDnevenRed($zasedanie_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDnevenRedTree($zasedanie_id, $group_id, cb: (result: any, e: any) => void, scope?: any): void;
    addDnevenRed($data, cb: (result: any, e: any) => void, scope?: any): void;
    cancelDnevenRed($red_id, cb: (result: any, e: any) => void, scope?: any): void;
    getOtpadnaliTochki($temp, $zasedanie_id, cb: (result: any, e: any) => void, scope?: any): void;
    addZasReshenie($zasedanie_id, $id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsInPrep($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    getReshenia($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    addDocReshenie($docs, $zasedanie_id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    getDnevenRedReshenia($id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsReshenia($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    regProtokol($zasedanie_id, cb: (result: any, e: any) => void, scope?: any): void;
    makeTask($doc_id, $prep_id, $to_who, $from_who, $for_what, $txt, $srok, cb: (result: any, e: any) => void, scope?: any): void;
    getZasedaniaClaimsList($zasedanieId, cb: (result: any, e: any) => void, scope?: any): void;
    getClaimsList($filter, $offset, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getZasedaniaList($colId, cb: (result: any, e: any) => void, scope?: any): void;
    getCollectiveList( cb: (result: any, e: any) => void, scope?: any): void;
    createZasedanieClaim($data, cb: (result: any, e: any) => void, scope?: any): void;
    updateZasedanieClaim($data, cb: (result: any, e: any) => void, scope?: any): void;
    removeZasedaniaClaim($data, cb: (result: any, e: any) => void, scope?: any): void;
    getStandPoints($zasedanieId, $claimId, cb: (result: any, e: any) => void, scope?: any): void;
    createStandPoint($data, cb: (result: any, e: any) => void, scope?: any): void;
    updateStandPoint($row, cb: (result: any, e: any) => void, scope?: any): void;
    removeStandPoint($data, cb: (result: any, e: any) => void, scope?: any): void;
    getPayments($claimId, cb: (result: any, e: any) => void, scope?: any): void;
    getBanks($data, cb: (result: any, e: any) => void, scope?: any): void;
    createPayment($data, cb: (result: any, e: any) => void, scope?: any): void;
    updatePayment($data, cb: (result: any, e: any) => void, scope?: any): void;
    deletePayment($key, cb: (result: any, e: any) => void, scope?: any): void;
    getMemberAttendance($zasedanieId, cb: (result: any, e: any) => void, scope?: any): void;
    updateMemberAttendance($data, cb: (result: any, e: any) => void, scope?: any): void;
    getProtcolFull($zasedani_id, cb: (result: any, e: any) => void, scope?: any): void;
    getProtcolForPrint($zasedani_id, cb: (result: any, e: any) => void, scope?: any): void;
    getAllStandPoints($zasedanie_id, cb: (result: any, e: any) => void, scope?: any): void;
    formZasedaniePrep($zasedanie_id, cb: (result: any, e: any) => void, scope?: any): void;
    delCollective($id, cb: (result: any, e: any) => void, scope?: any): void;
    getCollectiveMembers2($cid, cb: (result: any, e: any) => void, scope?: any): void;
    getUserCollective( cb: (result: any, e: any) => void, scope?: any): void;
    getMembersStandPoints($collectiveId, $claimId, cb: (result: any, e: any) => void, scope?: any): void;
    addClaimToCollective($data, cb: (result: any, e: any) => void, scope?: any): void;
    getZasedaniaClaimsListNew($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getClaimStandPoints($collective_id, $zas_claim_id, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\ZdmoduleService.php */
declare interface IZdmoduleService {
    getPrepList($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getDocList($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    getRegDocsZd($start, $limit, $data, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\ZvrmoduleService.php */
declare interface IZvrmoduleService {
    getZvrStructure($parent_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPreps($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\AspRegisterService.php */
declare interface IAspRegisterService {
    addService($data, cb: (result: any, e: any) => void, scope?: any): void;
    updateService($data, cb: (result: any, e: any) => void, scope?: any): void;
    delService($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    getSrvcList($temp, cb: (result: any, e: any) => void, scope?: any): void;
    regSrvc($supl_id, $srvc, cb: (result: any, e: any) => void, scope?: any): void;
    delSrvc($item_id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    updateSrvc($item_id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    getKors($data, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getSrvc($supl_id, cb: (result: any, e: any) => void, scope?: any): void;
    getSrvcIds($supl_id, $zaiav_id, cb: (result: any, e: any) => void, scope?: any): void;
    getAspAdditional($zaiav_id, cb: (result: any, e: any) => void, scope?: any): void;
    addKorSrvc($data, cb: (result: any, e: any) => void, scope?: any): void;
    addCert($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    makeZaiavCopy($data, cb: (result: any, e: any) => void, scope?: any): void;
    getAllCertForSupl($supl_id, cb: (result: any, e: any) => void, scope?: any): void;
    getSrvcsCombo($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getOblastiList($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getObshtiniList($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getGradoveList($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getKorsSpr($data, cb: (result: any, e: any) => void, scope?: any): void;
    getSrvcSpr($supl_id, cb: (result: any, e: any) => void, scope?: any): void;
    getSupplAddress($data, cb: (result: any, e: any) => void, scope?: any): void;
    getSupplMailPhone($data, cb: (result: any, e: any) => void, scope?: any): void;
    getAllCertificates($data, cb: (result: any, e: any) => void, scope?: any): void;
    getStatistics($data, cb: (result: any, e: any) => void, scope?: any): void;
    getAllZaiavl($data, cb: (result: any, e: any) => void, scope?: any): void;
    getRegister($start, $limit, $data, cb: (result: any, e: any) => void, scope?: any): void;
    getSuplReportYear($supl_id, cb: (result: any, e: any) => void, scope?: any): void;
    getReportSrvc($data, cb: (result: any, e: any) => void, scope?: any): void;
    changeReportSrvcs($data, cb: (result: any, e: any) => void, scope?: any): void;
    addReportSrvc($supl_id, $kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getReportDetail($temp, cb: (result: any, e: any) => void, scope?: any): void;
    addReportDetails($data, cb: (result: any, e: any) => void, scope?: any): void;
    updateReportDetail($data, cb: (result: any, e: any) => void, scope?: any): void;
    delReportDetail($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    getReportsYear($start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getReportsSpravka($year, cb: (result: any, e: any) => void, scope?: any): void;
    getReportsByOblasti($year, cb: (result: any, e: any) => void, scope?: any): void;
    getReportsSrvcs($year, cb: (result: any, e: any) => void, scope?: any): void;
    getGradove($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getCities($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getCountries($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\Corespondents.php */
declare interface ICorespondents {
    getCorTree($group_id, $local, cb: (result: any, e: any) => void, scope?: any): void;
    getCity($query, cb: (result: any, e: any) => void, scope?: any): void;
    getCities($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getCountries($query, cb: (result: any, e: any) => void, scope?: any): void;
    getAllInternalKors($start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getAllInternalKorsList( cb: (result: any, e: any) => void, scope?: any): void;
    getCorByGroupId($group_id, $start, $limit, $local, cb: (result: any, e: any) => void, scope?: any): void;
    getDocKors($doc_id, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getGroupById($group_id, cb: (result: any, e: any) => void, scope?: any): void;
    getCorByFilter($data, $start, $limit, $local, cb: (result: any, e: any) => void, scope?: any): void;
    getUserByFilter($data, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    addKor($korData, cb: (result: any, e: any) => void, scope?: any): void;
    addKorGroup($groupData, cb: (result: any, e: any) => void, scope?: any): void;
    delKorGroup($groupId, cb: (result: any, e: any) => void, scope?: any): void;
    getCorPhones($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    delKorespondents($ids, cb: (result: any, e: any) => void, scope?: any): void;
    getKor($id, cb: (result: any, e: any) => void, scope?: any): void;
    moveKor($newFolder, $kors, cb: (result: any, e: any) => void, scope?: any): void;
    linkKor($newFolder, $kors, cb: (result: any, e: any) => void, scope?: any): void;
    getCorInfo($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    joinKors($new_kor, $old_kors, cb: (result: any, e: any) => void, scope?: any): void;
    getUsersLog($data, cb: (result: any, e: any) => void, scope?: any): void;
    getKorHistory($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    undeleteKor($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    setObshtByOblId($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    setGradoveByOblId($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getStreets($query, cb: (result: any, e: any) => void, scope?: any): void;
    getOrgList( cb: (result: any, e: any) => void, scope?: any): void;
    getOrgLica( cb: (result: any, e: any) => void, scope?: any): void;
    addOrgItem($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    editOrgItem($id, $new_kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    delOrgItem($id, cb: (result: any, e: any) => void, scope?: any): void;
    getOrgListUsers( cb: (result: any, e: any) => void, scope?: any): void;
    getBanksList( cb: (result: any, e: any) => void, scope?: any): void;
    addBank($bankData, $id, cb: (result: any, e: any) => void, scope?: any): void;
    editBankData($bankData, cb: (result: any, e: any) => void, scope?: any): void;
    delBank($bankId, cb: (result: any, e: any) => void, scope?: any): void;
    setKorGroupItemType($itemId, $itemType, cb: (result: any, e: any) => void, scope?: any): void;
    addKorespondent($data, cb: (result: any, e: any) => void, scope?: any): void;
    getKorespondent($korId, cb: (result: any, e: any) => void, scope?: any): void;
    getKorWithAllAddr($korId, cb: (result: any, e: any) => void, scope?: any): void;
    getAllKorGroups( cb: (result: any, e: any) => void, scope?: any): void;
    getKorForUpdate($itemId, cb: (result: any, e: any) => void, scope?: any): void;
    groupOrderUpdate($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDublKors( cb: (result: any, e: any) => void, scope?: any): void;
    getDublNameKors( cb: (result: any, e: any) => void, scope?: any): void;
    getKorsByIdList($idList, cb: (result: any, e: any) => void, scope?: any): void;
    getCorByFilterNew($data, $start, $limit, $local, cb: (result: any, e: any) => void, scope?: any): void;
    getCorByGroupIdNew($group_id, $start, $limit, $local, cb: (result: any, e: any) => void, scope?: any): void;
    getCorTreeNew($group_id, $local, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\PoliciesService.php */
declare interface IPoliciesService {
    addKorIndex($docid, $val, $date, cb: (result: any, e: any) => void, scope?: any): void;
    getPoliciesList($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    setPolicy($data, cb: (result: any, e: any) => void, scope?: any): void;
    addInitialViewReport($data, cb: (result: any, e: any) => void, scope?: any): void;
    getPoliciesCombo($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    setReport($data, cb: (result: any, e: any) => void, scope?: any): void;
    getReportList($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    setUvedomlenieClaim($data, cb: (result: any, e: any) => void, scope?: any): void;
    getClaimsList($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getClaimInfo($claim_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPolicyInfo($policy_id, cb: (result: any, e: any) => void, scope?: any): void;
    checkExistencePolicy($policy_num, $rec, cb: (result: any, e: any) => void, scope?: any): void;
    checkExistenceClaim($rec, $claim_num, $policy_num, $claim_data, cb: (result: any, e: any) => void, scope?: any): void;
    getPoliciesTree($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getClaimTrialTree($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getAllRows($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getArchRows($filter, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getUploaders($query, cb: (result: any, e: any) => void, scope?: any): void;
    moveArchivedOriginal($data, cb: (result: any, e: any) => void, scope?: any): void;
    getBoxes($query, cb: (result: any, e: any) => void, scope?: any): void;
    getStatsAllArchived( cb: (result: any, e: any) => void, scope?: any): void;
    getBoxesStats($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getAgency($query, cb: (result: any, e: any) => void, scope?: any): void;
    getOriginals($query, cb: (result: any, e: any) => void, scope?: any): void;
    updateBox($param, cb: (result: any, e: any) => void, scope?: any): void;
    preAttachBox($data, cb: (result: any, e: any) => void, scope?: any): void;
    renameFile($data, cb: (result: any, e: any) => void, scope?: any): void;
    setOriginalLog($original_id, $table_name, $event_type, $filename, $u, cb: (result: any, e: any) => void, scope?: any): void;
    delPolicyOriginal($origs, cb: (result: any, e: any) => void, scope?: any): void;
    getClaimFromOra($claimnumber, cb: (result: any, e: any) => void, scope?: any): void;
    regClaimFromOraForStela($prep_id, $claimnumber, cb: (result: any, e: any) => void, scope?: any): void;
    addDocsPrepToClaim($prep_id, $claimnumber, cb: (result: any, e: any) => void, scope?: any): void;
    getLastDocsListForPolicies( cb: (result: any, e: any) => void, scope?: any): void;
    regOpis($data, cb: (result: any, e: any) => void, scope?: any): void;
    getPolicyInfoByNumber($policy_number, cb: (result: any, e: any) => void, scope?: any): void;
    getClaimDossieDocs($data, cb: (result: any, e: any) => void, scope?: any): void;
    getFullClaimDossieDocs($claim_vid, cb: (result: any, e: any) => void, scope?: any): void;
    getKit( cb: (result: any, e: any) => void, scope?: any): void;
    addKitDocs($data, cb: (result: any, e: any) => void, scope?: any): void;
    changeStageDoc($data, cb: (result: any, e: any) => void, scope?: any): void;
    delKitDocs($data, cb: (result: any, e: any) => void, scope?: any): void;
    getClaimDossieTemplate($data, cb: (result: any, e: any) => void, scope?: any): void;
    regRegresClaim($data, cb: (result: any, e: any) => void, scope?: any): void;
    getOpisi($filter, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getOpisClaims($opis_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPolicyShortInfo($data, cb: (result: any, e: any) => void, scope?: any): void;
    getPolicyTreeOnlyOne($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getClaimsListNew($filter, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getLastDocsListForClaims( cb: (result: any, e: any) => void, scope?: any): void;
    getDossieTree($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getNewPoliciesTree($filter, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\SpravkiService.php */
declare interface ISpravkiService {
    getAdmSrvcsList($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getAdmSrvc($adm_id, cb: (result: any, e: any) => void, scope?: any): void;
    getAdmSrvcsGroups($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getUserRights($user, cb: (result: any, e: any) => void, scope?: any): void;
    getRegisteredDocs($data, cb: (result: any, e: any) => void, scope?: any): void;
    getUserRegisters( cb: (result: any, e: any) => void, scope?: any): void;
    SrokovControl($data, cb: (result: any, e: any) => void, scope?: any): void;
    SrokovControl_participant($data, cb: (result: any, e: any) => void, scope?: any): void;
    SrokovControl_PartStat($data, cb: (result: any, e: any) => void, scope?: any): void;
    DocDirectSpr($data, cb: (result: any, e: any) => void, scope?: any): void;
    getPaperDocsForGiving( cb: (result: any, e: any) => void, scope?: any): void;
    getPaperDocsForReceiving( cb: (result: any, e: any) => void, scope?: any): void;
    GivePaperDoc($docs, $given, cb: (result: any, e: any) => void, scope?: any): void;
    getGivenPaperDocs( cb: (result: any, e: any) => void, scope?: any): void;
    ReceivePaperDoc($docs, $received, cb: (result: any, e: any) => void, scope?: any): void;
    getReceivedPaperDocs( cb: (result: any, e: any) => void, scope?: any): void;
    DocsForExp($data, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    GetMarkedDocs($temp, cb: (result: any, e: any) => void, scope?: any): void;
    MarkDocForExp($docs, cb: (result: any, e: any) => void, scope?: any): void;
    UnmarkDocForExp($docs, cb: (result: any, e: any) => void, scope?: any): void;
    ExpDocs($docs, cb: (result: any, e: any) => void, scope?: any): void;
    ChangeDocDelivery($docs, cb: (result: any, e: any) => void, scope?: any): void;
    ChangeDocDeliveryNormalPost($docs, cb: (result: any, e: any) => void, scope?: any): void;
    ExpDocsSpravka($start, $limit, $data, cb: (result: any, e: any) => void, scope?: any): void;
    AdmSrvcsSpravka($data, cb: (result: any, e: any) => void, scope?: any): void;
    getRegisteredDocsEx($start, $limit, $data, cb: (result: any, e: any) => void, scope?: any): void;
    getMaterials_List($lastDays, $from, $to, $start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    MarkReceivedOr($docs, $date, cb: (result: any, e: any) => void, scope?: any): void;
    MarkReturnedPackage($docs, $date, cb: (result: any, e: any) => void, scope?: any): void;
    getObrRazpiski_List($lastDays, $from, $to, $start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    MarkObrRazpiskiGiven($docs, cb: (result: any, e: any) => void, scope?: any): void;
    MarkReturnedDoc($date, $doc_id, $prep_id, $kor_id, $predal_kor_id, $comments, cb: (result: any, e: any) => void, scope?: any): void;
    MarkReturnedPrep($date, $doc_id, $prep_id, $kor_id, $predal_kor_id, $comments, cb: (result: any, e: any) => void, scope?: any): void;
    ReturnDocEtraffic($date, $doc_id, $prep_id, $kor_id, $predal_kor_id, $comments, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\TasksService.php */
declare interface ITasksService {
    addStdTask($data, cb: (result: any, e: any) => void, scope?: any): void;
    delStdTask($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateStdTask($data, cb: (result: any, e: any) => void, scope?: any): void;
    getStdTasks($temp, cb: (result: any, e: any) => void, scope?: any): void;
    addStdDirection($data, cb: (result: any, e: any) => void, scope?: any): void;
    delStdDirection($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateStdDirection($data, cb: (result: any, e: any) => void, scope?: any): void;
    getStdDirection($temp, cb: (result: any, e: any) => void, scope?: any): void;
    addNewTask($data, cb: (result: any, e: any) => void, scope?: any): void;
    delTask($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateTask($data, cb: (result: any, e: any) => void, scope?: any): void;
    getTask($temp, cb: (result: any, e: any) => void, scope?: any): void;
    addPaperDoc($data, cb: (result: any, e: any) => void, scope?: any): void;
    delPaperDoc($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    updatePaperDoc($data, cb: (result: any, e: any) => void, scope?: any): void;
    getPaperDoc($temp, cb: (result: any, e: any) => void, scope?: any): void;
    addElDoc($data, cb: (result: any, e: any) => void, scope?: any): void;
    delElDoc($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateElDoc($data, cb: (result: any, e: any) => void, scope?: any): void;
    getElDoc($temp, cb: (result: any, e: any) => void, scope?: any): void;
    addAppointment($data, cb: (result: any, e: any) => void, scope?: any): void;
    delAppointment($a_type_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateAppointment($data, cb: (result: any, e: any) => void, scope?: any): void;
    getAppointments($temp, cb: (result: any, e: any) => void, scope?: any): void;
    addDelivery($data, cb: (result: any, e: any) => void, scope?: any): void;
    delDelivery($id, cb: (result: any, e: any) => void, scope?: any): void;
    updateDelivery($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDelivery($temp, cb: (result: any, e: any) => void, scope?: any): void;
    getStdDirections($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getTaskTemplates($adm_id, cb: (result: any, e: any) => void, scope?: any): void;
    getTaskFolder($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getMsgFolder($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getMsgGoFolder($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPostaveniFolder($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    addMove($data, cb: (result: any, e: any) => void, scope?: any): void;
    getTaskSettings($v, cb: (result: any, e: any) => void, scope?: any): void;
    addTask($data, cb: (result: any, e: any) => void, scope?: any): void;
    continueSrok($task_id, $date, $comments, cb: (result: any, e: any) => void, scope?: any): void;
    getStdText($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getStdTextWithoutDoc($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getKors($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getNotes($temp, cb: (result: any, e: any) => void, scope?: any): void;
    addNotes($data, cb: (result: any, e: any) => void, scope?: any): void;
    delNotes($temp, cb: (result: any, e: any) => void, scope?: any): void;
    updateNotes($data, cb: (result: any, e: any) => void, scope?: any): void;
    getTaskParticipants($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPersonalKors($case_type, cb: (result: any, e: any) => void, scope?: any): void;
    addPersonalKors($data, cb: (result: any, e: any) => void, scope?: any): void;
    delPersonalKors($temp, cb: (result: any, e: any) => void, scope?: any): void;
    updatePersonalKors($data, cb: (result: any, e: any) => void, scope?: any): void;
    cancelParticipant($task_id, $part_ids, $doc_id, $prep_id, $text, cb: (result: any, e: any) => void, scope?: any): void;
    addTaskParticipants($task_id, $parts, $text, cb: (result: any, e: any) => void, scope?: any): void;
    setCurrentTaskDone($task_id, cb: (result: any, e: any) => void, scope?: any): void;
    setCurrentAndChildsTasksDone($task_id, cb: (result: any, e: any) => void, scope?: any): void;
    setDocTasksDone($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    setPrepTasksDone($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskDone($task_id, $txt, cb: (result: any, e: any) => void, scope?: any): void;
    markTaskDeleted($task_id, $text, cb: (result: any, e: any) => void, scope?: any): void;
    addStreet($data, $str_id, cb: (result: any, e: any) => void, scope?: any): void;
    getStreet($query, cb: (result: any, e: any) => void, scope?: any): void;
    getObIds($query, cb: (result: any, e: any) => void, scope?: any): void;
    update_task_ex($param, cb: (result: any, e: any) => void, scope?: any): void;
    getVidoveDocsTasks($vid_doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    addVidoveDocsTasks($data, cb: (result: any, e: any) => void, scope?: any): void;
    updateVidoveDocsTasks($data, cb: (result: any, e: any) => void, scope?: any): void;
    delVidoveDocsTasks($data, cb: (result: any, e: any) => void, scope?: any): void;
    getVidoveDocsTasksPart($vda_id, cb: (result: any, e: any) => void, scope?: any): void;
    deleteVidoveDocsTasksPart($data, cb: (result: any, e: any) => void, scope?: any): void;
    addVidoveDocsTasksPart($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDocTasks($doc_id, $all, cb: (result: any, e: any) => void, scope?: any): void;
    docToManyPreps($data, cb: (result: any, e: any) => void, scope?: any): void;
    docsToManyPreps($data, cb: (result: any, e: any) => void, scope?: any): void;
    changeControlSrok($task_id, $date, $comments, cb: (result: any, e: any) => void, scope?: any): void;
    getTaskData($task_id, cb: (result: any, e: any) => void, scope?: any): void;
    editTask($data, cb: (result: any, e: any) => void, scope?: any): void;
    getVidoveDocsTasksTree($data, cb: (result: any, e: any) => void, scope?: any): void;
    addVidoveDocsTasksNew($data, cb: (result: any, e: any) => void, scope?: any): void;
    delVidoveDocsTasksNew($vda_id, cb: (result: any, e: any) => void, scope?: any): void;
    getGroupParts($group_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPendingGroupsTasks($filter, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getAcceptedGroupsTasks($filter, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getGroupPartsLoad($group_id, cb: (result: any, e: any) => void, scope?: any): void;
    setGroupTaskForceParticipant($data, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\UvedomleniamoduleService.php */
declare interface IUvedomleniamoduleService {
    getUvedStructure($parent_id, cb: (result: any, e: any) => void, scope?: any): void;
    addUvedomlenie($data, $data_lica, cb: (result: any, e: any) => void, scope?: any): void;
    addSpravkaGrao($data, cb: (result: any, e: any) => void, scope?: any): void;
    addDoc($data, cb: (result: any, e: any) => void, scope?: any): void;
    getUvedomlenia($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getPrep($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsInDossier($data, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getRegisteredUvedomleniaStatistics($data, cb: (result: any, e: any) => void, scope?: any): void;
    getRegisteredUvedomleniaList( cb: (result: any, e: any) => void, scope?: any): void;
    getInspector($lice_id, cb: (result: any, e: any) => void, scope?: any): void;
    setInspector($lice_id, $inspector_kor_id, $doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getLicaIds($uved_id, cb: (result: any, e: any) => void, scope?: any): void;
    setResponsibleTD($uved_id, $lice_id, $responsible_td_kor_id, $doc_id, $option, $moveTo, cb: (result: any, e: any) => void, scope?: any): void;
    getLicaList($uved_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateLicaList($data, cb: (result: any, e: any) => void, scope?: any): void;
    getUvedomleniaInspector($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getUvedomleniaForRazpredeliane($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getUvedomleniaCount($data, cb: (result: any, e: any) => void, scope?: any): void;
    getUvedomleniaCountByTD($data, cb: (result: any, e: any) => void, scope?: any): void;
    getUvedomleniaAgrList($data, cb: (result: any, e: any) => void, scope?: any): void;
    getUvedomleniaListSpravka($data, cb: (result: any, e: any) => void, scope?: any): void;
    getPreprateniUvedomleniaCountByForTD($data, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\UvedomleniaregisterspravkiService.php */
declare interface IUvedomleniaregisterspravkiService {
    setUsersLogKomisia($filter, $log_event_type, $comment, cb: (result: any, e: any) => void, scope?: any): void;
    getRegisteredHereUved($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getRegisteredHereUvedLica($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getPrenasocheni($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getPrenasocheniFromOther($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getStarted($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getPrekrateni($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getPrikliucheni($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getCancelled($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getInspectorsLoad($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getInspectorsWork($filter, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\DelamoduleService.php */
declare interface IDelamoduleService {
    addDeloNewPrep($data, cb: (result: any, e: any) => void, scope?: any): void;
    getPrepList($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getViolationsListForJalba($jalba_id, cb: (result: any, e: any) => void, scope?: any): void;
    getLicaListForJalba($jalba_id, cb: (result: any, e: any) => void, scope?: any): void;
    addViolationsAndLica($jalba_id, $prep_id, $data_violations, $data_lica, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsForRazpredelenie($data, cb: (result: any, e: any) => void, scope?: any): void;
    setDeloInfo($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDeloInfo($trial_id, cb: (result: any, e: any) => void, scope?: any): void;
    addPrizovka($data, $resp, cb: (result: any, e: any) => void, scope?: any): void;
    getDeloSessions($trial_id, cb: (result: any, e: any) => void, scope?: any): void;
    getResultsList( cb: (result: any, e: any) => void, scope?: any): void;
    setActionsList($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    setFinalResultsList($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    addClaim($data, cb: (result: any, e: any) => void, scope?: any): void;
    delClaim($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateClaim($data, cb: (result: any, e: any) => void, scope?: any): void;
    getClaims($temp, cb: (result: any, e: any) => void, scope?: any): void;
    getDeloSides($data, cb: (result: any, e: any) => void, scope?: any): void;
    addDeloSides($data, cb: (result: any, e: any) => void, scope?: any): void;
    dellDeloSides($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateDeloSides($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDeloCosts($trial_id, cb: (result: any, e: any) => void, scope?: any): void;
    addDeloCost($data, cb: (result: any, e: any) => void, scope?: any): void;
    makeTask($doc_id, $prep_id, $to_who, $from_who, $for_what, $txt, $srok, $task_type, cb: (result: any, e: any) => void, scope?: any): void;
    addCostTask($trial_id, $cost_id, $to_who, $for_what, cb: (result: any, e: any) => void, scope?: any): void;
    addEvent($data, cb: (result: any, e: any) => void, scope?: any): void;
    delEvent($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateEvent($data, cb: (result: any, e: any) => void, scope?: any): void;
    getEvents($temp, cb: (result: any, e: any) => void, scope?: any): void;
    addclDela($data, cb: (result: any, e: any) => void, scope?: any): void;
    delclDela($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateclDela($data, cb: (result: any, e: any) => void, scope?: any): void;
    getclDela($temp, cb: (result: any, e: any) => void, scope?: any): void;
    addDeloStatus($data, cb: (result: any, e: any) => void, scope?: any): void;
    delDeloStatus($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateDeloStatus($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDeloStatus($temp, cb: (result: any, e: any) => void, scope?: any): void;
    setDeloHistory($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDeloHistory($trial_id, cb: (result: any, e: any) => void, scope?: any): void;
    addDeloNote($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDeloNotes($temp, cb: (result: any, e: any) => void, scope?: any): void;
    delDeloNote($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    getSessions( cb: (result: any, e: any) => void, scope?: any): void;
    getTrialsSpr($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getDeloAwardCosts($d, cb: (result: any, e: any) => void, scope?: any): void;
    addDeloAwardCost($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDelaSpravka($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getSpravkaDela2($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    updateDeloHistory($data, cb: (result: any, e: any) => void, scope?: any): void;
    delDeloHistory($ts_id, cb: (result: any, e: any) => void, scope?: any): void;
    addUsersLog($event_type, $table_name, $table_id, $txt, $stat, cb: (result: any, e: any) => void, scope?: any): void;
    deleteTrial($data, cb: (result: any, e: any) => void, scope?: any): void;
    delTrialSide($data, cb: (result: any, e: any) => void, scope?: any): void;
    deletePrizovka($data, cb: (result: any, e: any) => void, scope?: any): void;
    deletePractice($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDelaSumiList($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    addPrisudeniSumi($data, cb: (result: any, e: any) => void, scope?: any): void;
    getTrialsList($trial_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDeloReshenia($trial_id, cb: (result: any, e: any) => void, scope?: any): void;
    getSpravkaKfnPrikliucheni($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getSpravkaKfnVisiashti($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getDeloInfoWork($trial_id, cb: (result: any, e: any) => void, scope?: any): void;
    getTrialClaimsList($data, cb: (result: any, e: any) => void, scope?: any): void;
    updateClaimVid($trial_prep_id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    addTrialClaims($data, cb: (result: any, e: any) => void, scope?: any): void;
    removeClaimFromTrial($id, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\UvedomleniaregisterService.php */
declare interface IUvedomleniaregisterService {
    getUvedStructure($parent_id, cb: (result: any, e: any) => void, scope?: any): void;
    addKorIndex($docid, $val, $date, cb: (result: any, e: any) => void, scope?: any): void;
    addUvedomlenie($data, $data_lica, cb: (result: any, e: any) => void, scope?: any): void;
    addSpravkaGrao($data, cb: (result: any, e: any) => void, scope?: any): void;
    addDoc($data, cb: (result: any, e: any) => void, scope?: any): void;
    setReshenie($lice_id, $reshenie_type, $reshenie, $reshenie_date, cb: (result: any, e: any) => void, scope?: any): void;
    getUvedomlenia($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getPrep($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocsInDossier($data, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getRegisteredUvedomleniaStatistics($data, cb: (result: any, e: any) => void, scope?: any): void;
    getRegisteredUvedomleniaList( cb: (result: any, e: any) => void, scope?: any): void;
    getInspector($lice_id, cb: (result: any, e: any) => void, scope?: any): void;
    getProtocol_id($lice_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPrep_id($lice_id, cb: (result: any, e: any) => void, scope?: any): void;
    delFolderItems($lice_id, $inspector_kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    setInspector($lice_id, $inspector_kor_id, $doc_id, $reason, cb: (result: any, e: any) => void, scope?: any): void;
    delInspector($lice_id, $inspector, $reason, cb: (result: any, e: any) => void, scope?: any): void;
    getLicaIds($uved_id, cb: (result: any, e: any) => void, scope?: any): void;
    AdminSetResponsibleTD($lice_id, $responsible_td_kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    setResponsibleTD($uved_id, $lice_id, $responsible_td_kor_id, $doc_id, $option, $moveTo, cb: (result: any, e: any) => void, scope?: any): void;
    getLicaList($uved_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateLicaList($data, cb: (result: any, e: any) => void, scope?: any): void;
    getUvedomleniaInspector($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getUvedomleniaForRazpredeliane($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getUvedomleniaCount($data, cb: (result: any, e: any) => void, scope?: any): void;
    getUvedomleniaCountByTD($data, cb: (result: any, e: any) => void, scope?: any): void;
    getUvedomleniaAgrList($data, cb: (result: any, e: any) => void, scope?: any): void;
    getUvedomleniaListSpravka($data, cb: (result: any, e: any) => void, scope?: any): void;
    getPreprateniUvedomleniaCountByForTD($data, cb: (result: any, e: any) => void, scope?: any): void;
    getCrimesList( cb: (result: any, e: any) => void, scope?: any): void;
    addCrimesForLica($all, $uved_id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    getCrimesForLica($params, cb: (result: any, e: any) => void, scope?: any): void;
    addCrime($data, $case_id, cb: (result: any, e: any) => void, scope?: any): void;
    delCrime($crime_list_id, cb: (result: any, e: any) => void, scope?: any): void;
    addPractice($data, $case_id, cb: (result: any, e: any) => void, scope?: any): void;
    delPractice($case_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPracticesList( cb: (result: any, e: any) => void, scope?: any): void;
    regNewPractice($data, $data_cases, $data_responsibles, cb: (result: any, e: any) => void, scope?: any): void;
    makeTask($doc_id, $prep_id, $to_who, $from_who, $for_what, $txt, $srok, $regPrizovka, cb: (result: any, e: any) => void, scope?: any): void;
    getPracticesPrepsList($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getPracticeCasesList($practice_id, cb: (result: any, e: any) => void, scope?: any): void;
    addPracticeCases($practice_id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    getPracticeInfo($practice_id, cb: (result: any, e: any) => void, scope?: any): void;
    setUsersLog($grd, cb: (result: any, e: any) => void, scope?: any): void;
    setUsersLogAction($lice_id, $ul_item_type, cb: (result: any, e: any) => void, scope?: any): void;
    getRegisteredHereLica($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getRegisteredHereUved($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getRegisteredHereAndPrenasocheni($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getReceivedHere($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getUvedomlenieInfo($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getDosieStatus($lice_id, cb: (result: any, e: any) => void, scope?: any): void;
    changePhase($uved_id, cb: (result: any, e: any) => void, scope?: any): void;
    addDocsToPrep($prep_id, $docs, $lice_id, cb: (result: any, e: any) => void, scope?: any): void;
    excludeDocsFromPrep($docs, $text, $lice_id, cb: (result: any, e: any) => void, scope?: any): void;
    getLiceInfoStat($lice_data, cb: (result: any, e: any) => void, scope?: any): void;
    getPrepList($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    addRegisteredDocToManyDossiers($doc_id, $lica_kor_id, $doc_ids, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\WorkRPC.php */
declare interface IWorkRPC {
    getFolders($folder_id, cb: (result: any, e: any) => void, scope?: any): void;
    delTrash($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    editFolder($f_id, $newName, cb: (result: any, e: any) => void, scope?: any): void;
    addFolder($folder_name, $parent_id, cb: (result: any, e: any) => void, scope?: any): void;
    checkFolderTasks($folder_id, cb: (result: any, e: any) => void, scope?: any): void;
    deleteTaskFolder($folder_id, cb: (result: any, e: any) => void, scope?: any): void;
    moveTask($newParent, $nodes, cb: (result: any, e: any) => void, scope?: any): void;
    getTasks($folder_id, $doc_num, $start, $limit, $sort, $dir, cb: (result: any, e: any) => void, scope?: any): void;
    getTaskInfo($task_id, cb: (result: any, e: any) => void, scope?: any): void;
    getTaskData($task_id, cb: (result: any, e: any) => void, scope?: any): void;
    getTaskData_Materials($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    setNotes($doc_id, $part_id, $text, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskData($data, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskData_Return($doc_id, $part_id, $parent_part_id, $text, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskData_Sign($doc_id, $part_id, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskData_Suglasuvane($doc_id, $part_id, $text, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskData_Aprove($doc_id, $part_id, $r, $text, $store, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskData_NotAprove($doc_id, $part_id, $text, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskData_Allow($doc_id, $part_id, $text, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskData_zapoznat($doc_id, $part_id, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskData_NotAllow($doc_id, $part_id, $text, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskData_NoSuglasuvane($doc_id, $part_id, $text, cb: (result: any, e: any) => void, scope?: any): void;
    setProcedure_Stopped($task_id, $date, $text, cb: (result: any, e: any) => void, scope?: any): void;
    setProcedure_Finnished($task_id, $date, $text, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskRead($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskNotRead($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskNotVisible($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    moveTaskToTrash($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    moveTaskToDocsInProccessFolder($item_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPersonalData($task_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPersonalData_Materials($prep_id, $doc_id, $part_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPersonalData_Originals($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    setPersonalData($data, cb: (result: any, e: any) => void, scope?: any): void;
    setOrig($data, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskDeleted($task_id, $date, $text, cb: (result: any, e: any) => void, scope?: any): void;
    getUris($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getCurrentOrgData( cb: (result: any, e: any) => void, scope?: any): void;
    updateCurrentOrgData($uri, $year, cb: (result: any, e: any) => void, scope?: any): void;
    getTasksTree($doc_id, $task_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPersonalVidoveDocs( cb: (result: any, e: any) => void, scope?: any): void;
    getPersDocsList($filters, cb: (result: any, e: any) => void, scope?: any): void;
    proposeDocBand($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getMaterialDocBand($mat_id, cb: (result: any, e: any) => void, scope?: any): void;
    getTaskInfo1($task_id, $doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    snemaneOtOtchet($task_id, $prep_id, $participant, cb: (result: any, e: any) => void, scope?: any): void;
    removePersFolderItems($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskDone($task_id, cb: (result: any, e: any) => void, scope?: any): void;
    lockMaterial($docId, $lock, cb: (result: any, e: any) => void, scope?: any): void;
    getOwnDocs($lastWeek, $from, $to, $start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getPrepInfo($prep_id, $doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getTasksCount( cb: (result: any, e: any) => void, scope?: any): void;
    getAllTrialsData($trial_id, $onlyOneInstance, cb: (result: any, e: any) => void, scope?: any): void;
    getBulinsInfo($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    getBulinsTrialInfo($trial_id, cb: (result: any, e: any) => void, scope?: any): void;
    getBulinsInfo2($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    getTasksNew($filter, $start, $limit, $sort, $dir, cb: (result: any, e: any) => void, scope?: any): void;
    stdWhere($field, $op, $alias, cb: (result: any, e: any) => void, scope?: any): void;
    getPolicyPrepiskiTree($filter, cb: (result: any, e: any) => void, scope?: any): void;
    getPersonalTasksFilters( cb: (result: any, e: any) => void, scope?: any): void;
    updateFilters($data, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskRead2($items, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskReadByInit($data, cb: (result: any, e: any) => void, scope?: any): void;
    setPlanningTask($data, cb: (result: any, e: any) => void, scope?: any): void;
    getProposeDocBandByDocVid($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getMaterialDocBandNew($mat_id, cb: (result: any, e: any) => void, scope?: any): void;
    saveMaterialDocBandNew($doc_id, $recs, cb: (result: any, e: any) => void, scope?: any): void;
    setNoticeForMaterial($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateLastTasksView($task, cb: (result: any, e: any) => void, scope?: any): void;
    getLastTasksView( cb: (result: any, e: any) => void, scope?: any): void;
    delDocBandFromMat($id, cb: (result: any, e: any) => void, scope?: any): void;
    setDocVidAndNewTasks($data, cb: (result: any, e: any) => void, scope?: any): void;
    termStretchRequest($data, cb: (result: any, e: any) => void, scope?: any): void;
    getProposeDocBand($task_id, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskDoneAfterMaterialReg($task_id, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskDoneAfterNewTask($task, cb: (result: any, e: any) => void, scope?: any): void;
    getWorkTree($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskData_Sign_Aprove($doc_id, $part_id, $txt, cb: (result: any, e: any) => void, scope?: any): void;
    noStretchTerm($data, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskAccept($task_id, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskNotReadNew($id, $byParent, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskData_Affirm($doc_id, $part_id, $r, $text, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskData_NotAffirm($doc_id, $part_id, $text, cb: (result: any, e: any) => void, scope?: any): void;
    acceptTaskToExecute($data, cb: (result: any, e: any) => void, scope?: any): void;
    checkSettings($s, cb: (result: any, e: any) => void, scope?: any): void;
    addNextTaskForMaterial($data, cb: (result: any, e: any) => void, scope?: any): void;
    setTaskData_Print($doc_id, $part_id, cb: (result: any, e: any) => void, scope?: any): void;
}


/* E:\work\www\MicsyDocSysNormal\app\utils\RegisterService.php */
declare interface IRegisterService {
    getKorInfo($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDelivery($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getDlvrId($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDlvrName($id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocRegisters($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getDocRegTree($group_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocReg($id, cb: (result: any, e: any) => void, scope?: any): void;
    addDocReg($data, cb: (result: any, e: any) => void, scope?: any): void;
    delDocReg($reg_id, cb: (result: any, e: any) => void, scope?: any): void;
    addDocRegister($data, cb: (result: any, e: any) => void, scope?: any): void;
    delDocRegister($reg_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateDocRegister($data, cb: (result: any, e: any) => void, scope?: any): void;
    getPrepList($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getPrepListAddToPrep($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getDocList($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    getKorAddress($k_id, $dok_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocInfo($d_id, cb: (result: any, e: any) => void, scope?: any): void;
    getProcedures($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getDocTypes($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getDocTypesByCode($query, cb: (result: any, e: any) => void, scope?: any): void;
    getKor($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getKors($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getIntKors($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getVKors($temp, cb: (result: any, e: any) => void, scope?: any): void;
    getNextRazdelNumber($prep_id, $razdel, cb: (result: any, e: any) => void, scope?: any): void;
    setKorURI( cb: (result: any, e: any) => void, scope?: any): void;
    ChangeDocKor($doc_id, $kors, cb: (result: any, e: any) => void, scope?: any): void;
    RegDoc($data, cb: (result: any, e: any) => void, scope?: any): void;
    setDocNumber($doc_id, $number, cb: (result: any, e: any) => void, scope?: any): void;
    RegDocEdsd($data, cb: (result: any, e: any) => void, scope?: any): void;
    getKorIndexEdsd($kor_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPrepNumberEdsd($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    getHistory($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    getTasks($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    MarkTaskAsDone($task_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPart($task_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocOriginals($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getOriginals($doc_id, $prep, cb: (result: any, e: any) => void, scope?: any): void;
    delOriginal($origs, cb: (result: any, e: any) => void, scope?: any): void;
    getDocument($prep_id, $doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    regMaterial($doc_id, $reg_id, cb: (result: any, e: any) => void, scope?: any): void;
    addDocsToPrep($prep_id, $docs, cb: (result: any, e: any) => void, scope?: any): void;
    addKorToDoc($doc_id, $kors, cb: (result: any, e: any) => void, scope?: any): void;
    prepDocForSend($docid, cb: (result: any, e: any) => void, scope?: any): void;
    addKorIndex($docid, $data, cb: (result: any, e: any) => void, scope?: any): void;
    getDeloByVidDoc($vid_id, cb: (result: any, e: any) => void, scope?: any): void;
    getSystemPrepList($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getPublicPrepList($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getDocHistory($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    changeIdentity($new_kor, $new_org_id, $new_kor_name, cb: (result: any, e: any) => void, scope?: any): void;
    removeFromPFolders($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getInvolvedPersonnel($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    excludeDocsFromPrep($docs, $text, cb: (result: any, e: any) => void, scope?: any): void;
    getDelo($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocKors($doc_id, $prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocKorsIndexes($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    setDeloToPrep($prep_id, $delo_id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocBand($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    doNoticeForRegistration($doc_id, $to_who, $from_who, $for_what, $txt, $prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    addDocBand($doc_id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    addDocBandOneMat($doc_id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    addDocBandAllMats($flag, $pdoc_id, $part_id, $data, cb: (result: any, e: any) => void, scope?: any): void;
    getAllDocKors($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getNewMatName($prep_id, $doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getImages( cb: (result: any, e: any) => void, scope?: any): void;
    getSelectImages($nameSelect, cb: (result: any, e: any) => void, scope?: any): void;
    setOpenRKK($doc_id, $prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    setOpenOriginal($doc_id, $orig_id, $filename, cb: (result: any, e: any) => void, scope?: any): void;
    getPLastDocsList($temp, cb: (result: any, e: any) => void, scope?: any): void;
    getDocInfo1($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    createRegTemplate($data, cb: (result: any, e: any) => void, scope?: any): void;
    setProcedureByVidDoc($vid_id, cb: (result: any, e: any) => void, scope?: any): void;
    setVidDocByProcedure($proc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getProcedureKomplektacia($proc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getHiddenButtons( cb: (result: any, e: any) => void, scope?: any): void;
    setMultyOriginals($docId, $origs, cb: (result: any, e: any) => void, scope?: any): void;
    getRegTemplates( cb: (result: any, e: any) => void, scope?: any): void;
    getRegTemplates2($personal, cb: (result: any, e: any) => void, scope?: any): void;
    getAllRegTemplates( cb: (result: any, e: any) => void, scope?: any): void;
    getTemplate($temp_id, cb: (result: any, e: any) => void, scope?: any): void;
    updateRegTemplate($data, cb: (result: any, e: any) => void, scope?: any): void;
    RegTemplate($data, cb: (result: any, e: any) => void, scope?: any): void;
    getTemplateInfo($id, cb: (result: any, e: any) => void, scope?: any): void;
    getDocDefaultRegisters($query, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    regContainerTrans($data, $docs, cb: (result: any, e: any) => void, scope?: any): void;
    setRawOriginal($docId, $data, cb: (result: any, e: any) => void, scope?: any): void;
    getnkpdTree($group_id, cb: (result: any, e: any) => void, scope?: any): void;
    getNkpdList($id, $group_code, $item_code, $stext, cb: (result: any, e: any) => void, scope?: any): void;
    setPrepName($prep_id, $txt, cb: (result: any, e: any) => void, scope?: any): void;
    getNewMail($data, cb: (result: any, e: any) => void, scope?: any): void;
    getMailOpis( cb: (result: any, e: any) => void, scope?: any): void;
    updateKor($data, cb: (result: any, e: any) => void, scope?: any): void;
    removeMail($data, cb: (result: any, e: any) => void, scope?: any): void;
    makeSpam($data, cb: (result: any, e: any) => void, scope?: any): void;
    delKor($kor_id, $doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    changeDocDate($doc_id, $prep_id, $date, cb: (result: any, e: any) => void, scope?: any): void;
    restoreDoc($docs, $text, cb: (result: any, e: any) => void, scope?: any): void;
    changeProc($prep_id, $proc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getVidNameByVidDoc($vid_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPersonalTemplates($data, cb: (result: any, e: any) => void, scope?: any): void;
    addPersonalTemplates($temps, cb: (result: any, e: any) => void, scope?: any): void;
    dellPersonalTemplates($temps, cb: (result: any, e: any) => void, scope?: any): void;
    getSPBDocTypes( cb: (result: any, e: any) => void, scope?: any): void;
    getSPBDeclarations($filter, $start, $limit, cb: (result: any, e: any) => void, scope?: any): void;
    getSPBReports($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    getJoinetPrepiski($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    addPrepToPrep($to_prep, $from_prep, cb: (result: any, e: any) => void, scope?: any): void;
    saveFileFromEmail($data, cb: (result: any, e: any) => void, scope?: any): void;
    getDocAllPreps($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    getPrepListForAdd($start, $limit, $filter, cb: (result: any, e: any) => void, scope?: any): void;
    getDossieKitDocs($data, cb: (result: any, e: any) => void, scope?: any): void;
    getKits($id, cb: (result: any, e: any) => void, scope?: any): void;
    getKitDocs($kit_id, cb: (result: any, e: any) => void, scope?: any): void;
    addKitDocs($data, cb: (result: any, e: any) => void, scope?: any): void;
    delKit($id, cb: (result: any, e: any) => void, scope?: any): void;
    delKitDocs($id, cb: (result: any, e: any) => void, scope?: any): void;
    addKit($data, cb: (result: any, e: any) => void, scope?: any): void;
    getKitIdByDoc($doc_vid_id, cb: (result: any, e: any) => void, scope?: any): void;
    getKitIdByDocForAll($doc_vid_id, cb: (result: any, e: any) => void, scope?: any): void;
    getKitIdByPrepId($prep_id, cb: (result: any, e: any) => void, scope?: any): void;
    loadAppsForDoc($data, cb: (result: any, e: any) => void, scope?: any): void;
    getPrepParent($data, cb: (result: any, e: any) => void, scope?: any): void;
    changeStageDoc($data, cb: (result: any, e: any) => void, scope?: any): void;
    getNewAttachName($doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    setSeasePolicy($data, cb: (result: any, e: any) => void, scope?: any): void;
    setPaymentDoc($data, cb: (result: any, e: any) => void, scope?: any): void;
    setDocVidAndNewTasks($data, cb: (result: any, e: any) => void, scope?: any): void;
    moveDocToPrep($data, cb: (result: any, e: any) => void, scope?: any): void;
    changeHistoryDate($data, cb: (result: any, e: any) => void, scope?: any): void;
    setDocKorsNew($kors, $doc_id, cb: (result: any, e: any) => void, scope?: any): void;
    regMaterialAttachments($mat_id, $new_doc, cb: (result: any, e: any) => void, scope?: any): void;
    checkSettings($s, cb: (result: any, e: any) => void, scope?: any): void;
}


