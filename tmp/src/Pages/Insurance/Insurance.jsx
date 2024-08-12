import React from 'react'
import './Insurance.css'
import PageHeader from '../../Components/PageHeader'

const Insurance = () => {
    return (
        <div id='insurance_container' className={'page_container'}>
            <PageHeader header_text={'Billing & Insurance'} />
            <div className='fr' id='insurance_lineOne'>
                <p>
                    We accept most major insurance companies including:
                    <ul >
                        <li>Aetna</li>
                        <li>Blue Cross Blue Shield</li>
                        <li>Cigna</li>
                        <li>Humana</li>
                        <li>Tricare</li>
                        <li>United Healthcare</li>
                        <li>UMR</li>
                    </ul><br />
                    If your insurance isn’t listed please call our Billing Dept at 985-872-2897 to confirm if it’s a policy we can file.
                    <br />All insurance eligibility will be verified prior to appointment time.  Co-pays and deductibles will be collected at the time of service.  
                    <br />For your convenience we accept all forms of payment.
                    <br />All Bayou Health Plans as well as some private plans require a PCP.  The child must be linked to a Bayou Pediatrics physician to be able to be seen.
                </p>
                <div id='insurance_image'>
                    
                </div>
            </div>
            <br />
            <div id="other_insurance">
                
                <h2>Other Insurance</h2>
                <div>
                    <p>
                        <h3>Medicaid</h3>
                        <ul>
                            <li>Amerihealth</li>
                            <li>Louisiana Healthcare</li>
                            <li>United Healthcare</li>
                        </ul>
                        If your insurance isn’t listed please call our Billing Dept at 985-872-2897 to confirm if it’s a policy we can file.
                        <br /><br />
                        <span>
                            All insurance eligibility will be verified prior to appointment time.  Co-pays and deductibles will be collected at the time of service.  <br />
                            For your convenience we accept all forms of payment.<br />
                            All Bayou Health Plans as well as some private plans require a PCP.  The child must be linked to a Bayou Pediatrics physician to be able to be seen.
                        </span>
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Insurance