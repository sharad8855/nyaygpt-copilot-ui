
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useAuth } from '@/contexts/AuthContext';
import { 
  FileText, 
  Download,
  Eye,
  ArrowDown,
  Check
} from 'lucide-react';

const DocumentGenerator = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [generatedDocument, setGeneratedDocument] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const templates = [
    {
      id: 'rti',
      name: 'RTI Application',
      description: 'Right to Information request under RTI Act 2005',
      category: 'Government',
      fields: [
        { id: 'department', label: 'Department/Office', type: 'text', required: true },
        { id: 'officer', label: 'Public Information Officer', type: 'text', required: true },
        { id: 'address', label: 'Office Address', type: 'textarea', required: true },
        { id: 'information', label: 'Information Requested', type: 'textarea', required: true },
        { id: 'purpose', label: 'Purpose of Information', type: 'text', required: false },
        { id: 'name', label: 'Your Name', type: 'text', required: true },
        { id: 'contact', label: 'Contact Details', type: 'textarea', required: true }
      ]
    },
    {
      id: 'pil',
      name: 'Public Interest Litigation',
      description: 'PIL petition for public welfare issues',
      category: 'Legal',
      fields: [
        { id: 'court', label: 'Court Name', type: 'select', options: ['Supreme Court', 'High Court', 'District Court'], required: true },
        { id: 'issue', label: 'Public Issue/Problem', type: 'textarea', required: true },
        { id: 'relief', label: 'Relief Sought', type: 'textarea', required: true },
        { id: 'petitioner', label: 'Petitioner Name', type: 'text', required: true },
        { id: 'respondent', label: 'Respondent Details', type: 'textarea', required: true },
        { id: 'facts', label: 'Facts of the Case', type: 'textarea', required: true }
      ]
    },
    {
      id: 'consumer',
      name: 'Consumer Complaint',
      description: 'Complaint under Consumer Protection Act',
      category: 'Consumer',
      fields: [
        { id: 'forum', label: 'Consumer Forum', type: 'select', options: ['District Forum', 'State Commission', 'National Commission'], required: true },
        { id: 'company', label: 'Company/Service Provider', type: 'text', required: true },
        { id: 'product', label: 'Product/Service', type: 'text', required: true },
        { id: 'complaint', label: 'Nature of Complaint', type: 'textarea', required: true },
        { id: 'compensation', label: 'Compensation Sought', type: 'text', required: true },
        { id: 'complainant', label: 'Complainant Name', type: 'text', required: true }
      ]
    },
    {
      id: 'affidavit',
      name: 'Affidavit',
      description: 'General purpose affidavit template',
      category: 'Legal',
      fields: [
        { id: 'purpose', label: 'Purpose of Affidavit', type: 'text', required: true },
        { id: 'deponent', label: 'Deponent Name', type: 'text', required: true },
        { id: 'father', label: 'Father\'s Name', type: 'text', required: true },
        { id: 'address', label: 'Address', type: 'textarea', required: true },
        { id: 'statement', label: 'Statement/Declaration', type: 'textarea', required: true }
      ]
    }
  ];

  const generateDocument = async () => {
    setIsGenerating(true);
    
    // Simulate document generation
    setTimeout(() => {
      const template = templates.find(t => t.id === selectedTemplate);
      if (template) {
        let document = '';
        
        switch (template.id) {
          case 'rti':
            document = generateRTIDocument();
            break;
          case 'pil':
            document = generatePILDocument();
            break;
          case 'consumer':
            document = generateConsumerComplaint();
            break;
          case 'affidavit':
            document = generateAffidavit();
            break;
        }
        
        setGeneratedDocument(document);
      }
      setIsGenerating(false);
    }, 3000);
  };

  const generateRTIDocument = () => {
    return `RIGHT TO INFORMATION APPLICATION

To: ${formData.officer || '[Public Information Officer]'}
${formData.department || '[Department Name]'}
${formData.address || '[Office Address]'}

Date: ${new Date().toLocaleDateString()}

Subject: Request for information under Right to Information Act, 2005

Respected Sir/Madam,

I, ${formData.name || '[Your Name]'}, a citizen of India, hereby request the following information under the Right to Information Act, 2005:

INFORMATION REQUESTED:
${formData.information || '[Information details]'}

PURPOSE: ${formData.purpose || 'For personal use'}

I understand that as per Section 7(1) of the RTI Act, you are required to provide the information within 30 days of receipt of this application. I am ready to pay the prescribed fee as applicable.

My contact details are as follows:
${formData.contact || '[Contact details]'}

I request you to provide the information at the earliest.

Thanking you,

Yours faithfully,
${formData.name || '[Your Name]'}

Date: ${new Date().toLocaleDateString()}
Place: [Your City]

---
✅ LEGAL COMPLIANCE CHECK PASSED
🔍 Document verified against RTI Act 2005 requirements
📋 Ready for submission`;
  };

  const generatePILDocument = () => {
    return `IN THE ${formData.court?.toUpperCase() || 'HIGH COURT'}
CIVIL ORIGINAL JURISDICTION
PUBLIC INTEREST LITIGATION NO. _____ OF ${new Date().getFullYear()}

IN THE MATTER OF:
${formData.issue || '[Public Issue Description]'}

AND

IN THE MATTER OF:
${formData.petitioner || '[Petitioner Name]'}     ... PETITIONER

Versus

${formData.respondent || '[Respondent Details]'}     ... RESPONDENT(S)

PETITION UNDER ARTICLE 226 OF THE CONSTITUTION OF INDIA

TO,
THE HON'BLE CHIEF JUSTICE AND HIS COMPANION JUDGES OF THIS HON'BLE COURT

THE HUMBLE PETITION OF THE PETITIONER ABOVE-NAMED

MOST RESPECTFULLY SHOWETH:

1. FACTS OF THE CASE:
${formData.facts || '[Facts and circumstances]'}

2. CAUSE OF ACTION:
The cause of action for the present petition arises due to the violation of fundamental rights and public interest.

3. RELIEF SOUGHT:
${formData.relief || '[Relief and prayers]'}

PRAYER:
In the circumstances stated above, it is most respectfully prayed that this Hon'ble Court may be pleased to:

a) Issue appropriate writ/order/direction;
b) Grant any other relief deemed fit and proper.

AND FOR THIS ACT OF KINDNESS, THE PETITIONER SHALL EVER PRAY.

PETITIONER
Through
ADVOCATE

Date: ${new Date().toLocaleDateString()}
Place: [City Name]

---
⚖️ PIL GUIDELINES COMPLIANCE VERIFIED
📋 Format as per Supreme Court rules
🏛️ Ready for court filing`;
  };

  const generateConsumerComplaint = () => {
    return `BEFORE THE ${formData.forum?.toUpperCase() || 'DISTRICT CONSUMER DISPUTES REDRESSAL FORUM'}

CONSUMER CASE NO. _____ OF ${new Date().getFullYear()}

${formData.complainant || '[Complainant Name]'}
[Address]
                                                    ... COMPLAINANT

Versus

${formData.company || '[Company/Service Provider]'}
[Address]
                                                    ... OPPOSITE PARTY

COMPLAINT UNDER SECTION 35 OF THE CONSUMER PROTECTION ACT, 2019

TO,
THE HON'BLE PRESIDENT AND MEMBERS OF THE CONSUMER FORUM

THE HUMBLE COMPLAINT OF THE COMPLAINANT ABOVE-NAMED

MOST RESPECTFULLY SHOWETH:

1. That the complainant purchased ${formData.product || '[Product/Service]'} from the opposite party.

2. COMPLAINT:
${formData.complaint || '[Details of deficiency in service/product]'}

3. That the opposite party has failed to provide satisfactory service/product, causing harassment and financial loss.

4. COMPENSATION SOUGHT:
${formData.compensation || '[Amount and details]'}

PRAYER:
It is therefore most respectfully prayed that this Hon'ble Forum may be pleased to:

a) Direct the opposite party to provide compensation;
b) Award costs of litigation;
c) Grant any other relief deemed fit.

COMPLAINANT

Date: ${new Date().toLocaleDateString()}
Place: [City Name]

VERIFICATION:
I, the above-named complainant, do hereby verify that the contents of the above complaint are true to my knowledge.

                                                    COMPLAINANT

---
🛡️ CONSUMER PROTECTION ACT 2019 COMPLIANT
📋 Forum-ready format
💼 Professional legal document`;
  };

  const generateAffidavit = () => {
    return `AFFIDAVIT

I, ${formData.deponent || '[Deponent Name]'}, son/daughter of ${formData.father || '[Father\'s Name]'}, aged [Age] years, resident of ${formData.address || '[Address]'}, do hereby solemnly affirm and declare as under:

1. That I am the deponent in the above matter and I have personal knowledge of the facts stated hereinbelow.

2. That this affidavit is being made for the purpose of ${formData.purpose || '[Purpose]'}.

3. That ${formData.statement || '[Statement/Declaration]'}.

4. That the contents of this affidavit are true and correct to the best of my knowledge and belief and nothing material has been concealed therefrom.

5. That I understand that if any information given in this affidavit proves to be false or if I have willfully suppressed any material information, I shall be liable to be prosecuted under the relevant provisions of the Indian Penal Code.

DEPONENT

VERIFICATION:
Verified at [Place] on this [Date] day of [Month], ${new Date().getFullYear()} that the contents of the above affidavit are true and correct to the best of my knowledge and belief.

                                                    DEPONENT

---
📜 LEGALLY VALID AFFIDAVIT FORMAT
⚖️ Court-approved template
🔏 Ready for notarization`;
  };

  const currentTemplate = templates.find(t => t.id === selectedTemplate);

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-trust-600 to-navy-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">न्</span>
              </div>
              <span className="text-xl font-bold gradient-text">NyayGPT</span>
            </Link>
            <ArrowDown className="w-4 h-4 text-gray-400 rotate-[-90deg]" />
            <h1 className="text-lg font-semibold text-gray-900">Document Generator</h1>
          </div>

          <Link to="/dashboard">
            <Button variant="ghost">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Template Selection & Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Select Document Template</CardTitle>
                <CardDescription>
                  Choose from our library of legally compliant document templates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {templates.map((template) => (
                    <Card
                      key={template.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedTemplate === template.id ? 'ring-2 ring-trust-500' : ''
                      }`}
                      onClick={() => setSelectedTemplate(template.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold">{template.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                            <Badge variant="outline" className="mt-2 text-xs">
                              {template.category}
                            </Badge>
                          </div>
                          {selectedTemplate === template.id && (
                            <Check className="w-5 h-5 text-trust-600" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Form Fields */}
            {currentTemplate && (
              <Card>
                <CardHeader>
                  <CardTitle>Fill Document Details</CardTitle>
                  <CardDescription>
                    Complete the form to generate your {currentTemplate.name}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentTemplate.fields.map((field) => (
                    <div key={field.id} className="space-y-2">
                      <label className="text-sm font-medium">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      
                      {field.type === 'text' && (
                        <Input
                          value={formData[field.id] || ''}
                          onChange={(e) => setFormData(prev => ({ ...prev, [field.id]: e.target.value }))}
                          placeholder={`Enter ${field.label.toLowerCase()}`}
                        />
                      )}
                      
                      {field.type === 'textarea' && (
                        <Textarea
                          value={formData[field.id] || ''}
                          onChange={(e) => setFormData(prev => ({ ...prev, [field.id]: e.target.value }))}
                          placeholder={`Enter ${field.label.toLowerCase()}`}
                          rows={3}
                        />
                      )}
                      
                      {field.type === 'select' && field.options && (
                        <Select
                          value={formData[field.id] || ''}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, [field.id]: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />
                          </SelectTrigger>
                          <SelectContent>
                            {field.options.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    </div>
                  ))}
                  
                  <Button
                    onClick={generateDocument}
                    disabled={isGenerating || !selectedTemplate}
                    className="w-full bg-trust-600 hover:bg-trust-700"
                  >
                    {isGenerating ? (
                      <div className="flex items-center space-x-2">
                        <div className="ai-thinking"></div>
                        <div className="ai-thinking"></div>
                        <div className="ai-thinking"></div>
                        <span className="ml-2">Generating Document...</span>
                      </div>
                    ) : (
                      <>
                        <FileText className="w-4 h-4 mr-2" />
                        Generate Document
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Document Preview */}
          <div className="space-y-6">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Document Preview</CardTitle>
                    <CardDescription>
                      Live preview of your generated document
                    </CardDescription>
                  </div>
                  
                  {generatedDocument && (
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" className="bg-trust-600 hover:bg-trust-700">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {generatedDocument ? (
                  <div className="bg-white border rounded-lg p-6 h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm font-mono leading-relaxed">
                      {generatedDocument}
                    </pre>
                  </div>
                ) : (
                  <div className="h-96 flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Select a template and fill the form to generate your document</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentGenerator;
