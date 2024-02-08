/* get arabic or english name depend on lang */

const names = [
    ['Home', 'الرئيسية'],
    ['Services', 'الخدمات'],
    ['Cart', 'السلة'],
    ['About', 'عنا'],
    ['Login', 'تسجيل دخول'],
    ['Sign Up', 'انشاء حساب'],
    ['Check Our Services', 'تفقد خدماتنا'],
    ['Dark mode', 'الوضع المظلم'],
    ['Why Choose us', 'لماذا نحن'],
    ['Our team', 'فريقنا'],
    ['View details', 'التفاصيل'],
    ['', ''],
    ['', ''],
];


const details = [
    ['dental cleaning', 'Comprehensive cleaning to remove plaque and tartar buildup, promoting oral health and preventing cavities and gum disease.', 'تنظيف الأسنان الشامل لإزالة تراكم البلاك والجير، وتعزيز الصحة الفموية ومنع تسوس الأسنان وأمراض اللثة.'],
    ['tooth extraction', 'Safe removal of damaged or decayed teeth, relieving pain and preventing further oral health issues.', 'استخراج الأسنان بطريقة آمنة لإزالة الأسنان التالفة أو المتسوسة، مما يخفف الألم ويمنع المشاكل الصحية الفموية الأخرى.'],
    ['root canal treatment', 'Treatment to remove infected pulp, alleviate pain, and save a severely damaged tooth from extraction.', 'علاج لإزالة نسيج العصب المصاب، وتخفيف الألم، وإنقاذ السن التالف جدًا من الاستخراج.'],
    ['dental implants', 'Surgical procedure to replace missing teeth with artificial tooth roots, providing a strong foundation for replacement teeth.', 'إجراء جراحي لاستبدال الأسنان المفقودة بجذور أسنان صناعية، مما يوفر أساسًا قويًا للأسنان الاصطناعية.'],
    ['fillings', 'Restoration of decayed teeth with durable filling materials, preserving tooth structure and preventing further decay.', 'استعادة الأسنان المتسوسة بمواد حشو دائمة، مما يحافظ على هيكل الأسنان ويمنع التسوس الأخرى.'],
    ['teeth whitening', 'Professional whitening treatment to remove stains and discoloration, enhancing the brightness of your smile.', 'علاج تبييض احترافي لإزالة البقع والتلونات، مما يعزز إشراقة ابتسامتك.'],
    ['dental crowns', 'Custom-made caps to cover damaged or weakened teeth, restoring their shape, size, and strength.', 'غطاء مصنوع حسب الطلب لتغطية الأسنان التالفة أو المضعفة، مما يعيد شكلها وحجمها وقوتها.'],
    ['orthodontic treatment', 'Correction of misaligned teeth and jaws using braces or aligners, improving dental health and enhancing smile aesthetics.', 'تصحيح الأسنان والفكين غير المتماثلين باستخدام التقويم أو الإمالات، مما يحسن الصحة الفموية ويعزز جمالية الابتسامة.'],
    ['periodontal treatment', 'Treatment for gum disease, including scaling, root planing, and other procedures to restore gum health and prevent tooth loss.', 'علاج لأمراض اللثة، بما في ذلك تنظيف الجير وتنظيف الجذور وإجراءات أخرى لاستعادة صحة اللثة ومنع فقدان الأسنان.'],
    ['dental bridges', 'Fixed dental prostheses to replace missing teeth, restoring your smile\'s appearance and function.', 'تركيبات أسنان ثابتة لاستبدال الأسنان المفقودة، مما يعيد مظهر ووظيفة ابتسامتك.'],
    ['oral surgery', 'Surgical procedures to address various dental issues, including tooth extraction, dental implants, and jaw surgeries.', 'إجراءات جراحية لعلاج مشاكل الأسنان المختلفة، بما في ذلك استخراج الأسنان وزراعة الأسنان وجراحات الفكين.'],
    ['sedation dentistry', 'Techniques to help patients relax and feel comfortable during dental procedures, reducing anxiety and discomfort.', 'تقنيات لمساعدة المرضى على الاسترخاء والشعور بالراحة أثناء الإجراءات السنية، مما يقلل من القلق والانزعاج.'],
    ['dental veneers', 'Thin shells bonded to the front of teeth to improve their appearance, covering stains, chips, or other imperfections.', 'قشور رقيقة ترتبط بالجزء الأمامي من الأسنان لتحسين مظهرها وتغطية البقع والتشققات أو العيوب الأخرى.'],
    ['fluoride treatment', 'Application of fluoride to strengthen tooth enamel and prevent tooth decay, especially in children and adults at risk for cavities.', 'تطبيق الفلورايد لتقوية المينا السنية ومنع تسوس الأسنان، خاصةً في الأطفال والكبار الذين يتعرضون لخطر التسوس.'],
    ['TMJ treatment', 'Treatment for temporomandibular joint disorders, including exercises, medications, and dental devices to alleviate pain and discomfort.', 'علاج لاضطرابات المفصل الفكي، بما في ذلك التمارين والأدوية وأجهزة الأسنان لتخفيف الألم والانزعاج.'],
    ['pediatric dentistry', 'Dental care for children, including preventive services, restorative treatments, and education to promote lifelong oral health.', 'رعاية الأسنان للأطفال، بما في ذلك الخدمات الوقائية والعلاجات الترميمية والتثقيف لتعزيز الصحة الفموية مدى الحياة.'],
    ['cosmetic dentistry', 'Aesthetic dental treatments to enhance the appearance of teeth and smile, including whitening, veneers, and bonding.', 'علاجات الأسنان التجميلية لتحسين مظهر الأسنان والابتسامة، بما في ذلك التبييض والفينير والتجميل.'],
    ['endodontic treatment', 'Treatment for infected tooth pulp, including root canal therapy to remove the infected tissue and restore tooth health.', 'علاج للنسيج العصبي المصاب بالعدوى، بما في ذلك علاج جذور الأسنان لإزالة النسيج المصاب واستعادة صحة الأسنان.'],
    ['digital dental impressions', 'Precise digital impressions of teeth and oral structures for various dental procedures, ensuring accurate treatment planning and outcomes.', 'الصور الرقمية الدقيقة للأسنان والهياكل الفموية لمختلف الإجراءات السنية، مما يضمن التخطيط العلاجي والنتائج الدقيقة.'],
    ['gum reshaping', 'Surgical or non-surgical procedures to reshape gum tissue, enhancing the appearance of the smile and improving periodontal health.', 'إجراءات جراحية أو غير جراحية لإعادة تشكيل أنسجة اللثة، مما يعزز مظهر الابتسامة ويحسن الصحة اللثوية.'],
    ['dental bonding', 'Application of tooth-colored resin to repair chips, cracks, or gaps in teeth, restoring their appearance and function.', 'تطبيق الراتنج ذو اللون الأسنان لإصلاح الشقوق أو التشققات أو الفجوات في الأسنان، مما يعيد مظهرها ووظيفتها.'],
    ['tooth contouring', 'Subtle reshaping of tooth enamel to improve tooth appearance and alignment, often combined with dental bonding or veneers.', 'إعادة تشكيل خفيف لمينا الأسنان لتحسين مظهر الأسنان وتوجيهها، وغالبًا ما يتم دمجه مع التجميل أو الفينير.'],
    ['nightguards', 'Custom-fitted oral appliances worn during sleep to protect teeth from grinding (bruxism) and reduce related symptoms such as jaw pain and headaches.', 'أجهزة الفم المخصصة التي ترتدي أثناء النوم لحماية الأسنان من الطحن (التقوس) وتقليل الأعراض المتعلقة مثل آلام الفك والصداع.'],
    ['bruxism treatment', 'Therapies and interventions to address teeth grinding and clenching, including lifestyle changes, dental appliances, and stress management techniques.', 'العلاجات والتدخلات لمعالجة طحن الأسنان والعض، بما في ذلك التغييرات في نمط الحياة والأجهزة السنية وتقنيات إدارة الضغط.'],
];

export const getConstName = (desired, isAr) => {

    let desiredName = '';

    const searchName = desired.toUpperCase();

    console.log("searchName: ", searchName);

    for (let i = 0; i < names.length; i++) {
        if(names[i][0].toUpperCase() === searchName){
            desiredName = isAr && names[i][1].length > 0 ? names[i][1] : (names[i][0].length > 0 ? names[i][0] : desired)
        }
    }

    return desiredName;

};


/* get details in english or arabic from details array */
export const getConstDetails = (desired, isAr) => {

    let desiredDetails = '';

    const searchDetail = desired.toUpperCase();

    console.log("searchDetail: ", searchDetail);

    for (let i = 0; i < details.length; i++) {
        if(details[i][0].toUpperCase() === searchDetail){
            desiredDetails = isAr ? details[i][2] : details[i][1]
        }
    }

    return desiredDetails;

};